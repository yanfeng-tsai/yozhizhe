import type { ChatMessage, Participant } from './types';

export const participants: Participant[] = [
  { id: 'u-owner', name: '主人', role: 'owner' },
  { id: 'a-manager', name: 'Manager AI', role: 'manager' },
  { id: 'd-door', name: '智慧門鎖', role: 'device' },
  { id: 'd-cam', name: '客廳攝影機', role: 'device' },
  { id: 'd-ac', name: '客廳冷氣', role: 'device' },
];

const now = Date.now();

export const seedMessages: ChatMessage[] = [
  {
    id: 'm1',
    senderId: 'u-owner',
    senderName: '主人',
    role: 'owner',
    text: '狗想尿尿的時候幫我開門。',
    createdAtMs: now - 1000 * 60 * 12,
  },
  {
    id: 'm2',
    senderId: 'a-manager',
    senderName: 'Manager AI',
    role: 'manager',
    text:
      '收到。我會拆解成：① 攝影機偵測狗靠近門口 ② 確認意圖後通知門鎖解鎖。若需要我也可請冷氣暫降風速避免驚嚇，要嗎？',
    createdAtMs: now - 1000 * 60 * 11,
  },
  {
    id: 'm3',
    senderId: 'd-cam',
    senderName: '客廳攝影機',
    role: 'device',
    text: '狀態：門口區域目前無移動物體。偵測服務已啟用。',
    createdAtMs: now - 1000 * 60 * 10,
  },
  {
    id: 'm4',
    senderId: 'd-door',
    senderName: '智慧門鎖',
    role: 'device',
    text: '待命中。收到解鎖指令後會執行並回報結果。',
    createdAtMs: now - 1000 * 60 * 9,
  },
];
