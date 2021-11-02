// 클라이언트
const socket = io("/");

function handleMessageNoti(data) {
  const { message, nickname } = data;
  console.log(`${nickname} said ${message}`);
}

socket.on("messageNoti", handleMessageNoti);

function sendMessage(message) {
  socket.emit("newMessage", { message });
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}
