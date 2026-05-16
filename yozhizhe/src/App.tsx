import { useCallback, useState } from 'react';
import { ChatHeader } from './components/ChatHeader';
import { Composer } from './components/Composer';
import { MessageList } from './components/MessageList';
import { participants as memberList, seedMessages } from './mockData';
import type { ChatMessage } from './types';
import './App.css';

const GROUP_NAME = '智慧居家協作群';
/** 對應「主人」，之後可由登入使用者 id 代入 */
const OWNER_ID = 'u-owner';

function newId(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `m-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>(seedMessages);

  const appendOwnerMessage = useCallback((text: string) => {
    const owner = memberList.find((p) => p.id === OWNER_ID)!;
    const msg: ChatMessage = {
      id: newId(),
      senderId: owner.id,
      senderName: owner.name,
      role: owner.role,
      text,
      createdAtMs: Date.now(),
    };
    setMessages((prev) => [...prev, msg]);
  }, []);

  return (
    <div className="app-shell">
      <ChatHeader groupName={GROUP_NAME} participants={memberList} />
      <MessageList messages={messages} ownerId={OWNER_ID} />
      <div>
        <Composer onSend={appendOwnerMessage} />
        <p className="app-hint">
          即時同步可改接 Firestore onSnapshot；目前為前端示範訊息流。
        </p>
      </div>
    </div>
  );
}
