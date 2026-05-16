import type { Participant } from '../types';

interface ChatHeaderProps {
  groupName: string;
  participants: Participant[];
}

export function ChatHeader({ groupName, participants }: ChatHeaderProps) {
  const subtitle = participants.map((p) => p.name).join(' · ');

  return (
    <header className="chat-header">
      <div className="chat-header__main">
        <div className="chat-header__avatar" aria-hidden>
          {groupName.slice(0, 1)}
        </div>
        <div className="chat-header__text">
          <h1 className="chat-header__title">{groupName}</h1>
          <p className="chat-header__subtitle" title={subtitle}>
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
}
