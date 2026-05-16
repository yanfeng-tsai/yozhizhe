import type { ChatMessage } from '../types';

interface MessageBubbleProps {
  message: ChatMessage;
  isSelf: boolean;
}

function formatTime(ms: number): string {
  const d = new Date(ms);
  return d.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
}

export function MessageBubble({ message, isSelf }: MessageBubbleProps) {
  const roleClass =
    message.role === 'manager'
      ? 'bubble--manager'
      : message.role === 'device'
        ? 'bubble--device'
        : 'bubble--owner';

  return (
    <div className={`msg-row ${isSelf ? 'msg-row--self' : 'msg-row--other'}`}>
      {!isSelf && (
        <div className="msg-avatar" aria-hidden title={message.senderName}>
          {message.senderName.slice(0, 1)}
        </div>
      )}
      <div className="msg-stack">
        {!isSelf && (
          <span className="msg-sender">{message.senderName}</span>
        )}
        <div className={`bubble ${roleClass}`}>
          <p className="bubble__text">{message.text}</p>
          <time className="bubble__time" dateTime={new Date(message.createdAtMs).toISOString()}>
            {formatTime(message.createdAtMs)}
          </time>
        </div>
      </div>
    </div>
  );
}
