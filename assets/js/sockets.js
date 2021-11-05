// frontend (웹) 소켓 관련된 모든 기능 컨트롤

import { handleNewUser } from "./notifications";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = (aSocket) => (socket = aSocket);

export const initSockets = (aSocket) => {
  const { events } = window; // events = window.events
  updateSocket(aSocket);
  // 다른 유저가 들어온 이벤트 "newUser"를 듣고 작동
  aSocket.on(events.newUser, handleNewUser);
};
