// frontend (웹) 소켓 관련된 모든 기능 컨트롤
import { handleNewMessage } from "./chat";
import { handleDisconnected, handleNewUser } from "./notifications";

let socket = null;

export const getSocket = () => socket;

export const initSockets = (aSocket) => {
  const { events } = window;
  socket = aSocket;
  // 다른 유저가 들어온 이벤트 "newUser"를 듣고 작동
  socket.on(events.newUser, handleNewUser);
  // 특정 유저가 나간 경우의 이벤트 "disconnected"를 듣고 작동
  socket.on(events.disconnected, handleDisconnected);
  //newMsg 이벤트 수신
  socket.on(events.newMsg, handleNewMessage);
};
