import { useEffect, useRef } from 'react';
import type { ChatMessage } from '../types';
import { MessageBubble } from './MessageBubble';

interface MessageListProps {
  messages: ChatMessage[];
  ownerId: string;
}

export function MessageList({ messages, ownerId }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  return (
    <div className="message-list" role="log" aria-live="polite" aria-relevant="additions">
      {messages.length === 0 ? (
        <p className="message-list__empty">尚無訊息，傳一則指令試試看。</p>
      ) : (
        messages.map((m) => (
          <MessageBubble key={m.id} message={m} isSelf={m.senderId === ownerId} />
        ))
      )}
      <div ref={bottomRef} />
    </div>
  );
}
