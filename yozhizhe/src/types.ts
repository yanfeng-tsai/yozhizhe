/** Firestore 之後可把 doc id 對應到 id，並用 serverTimestamp */
export type ParticipantRole = 'owner' | 'manager' | 'device';

export interface Participant {
  id: string;
  name: string;
  role: ParticipantRole;
}

export interface ChatMessage {
  id: string;
  /** 發話者對應 participants.id */
  senderId: string;
  /** 冗余顯示用，Firestore 可多存一份或 join */
  senderName: string;
  role: ParticipantRole;
  text: string;
  createdAtMs: number;
}
