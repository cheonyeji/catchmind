import events from "./events";

const socketController = (socket) => {
  socket.on(events.setNickname, ({ nickname }) => {
    console.log(nickname);
    socket.nickname = nickname;
    socket.broadcast.emit(events.newUser, { nickname });
  });

  // 유저가 나갔을 때,
  // 유저가 나갔음을 알려주는 이벤트 발생
  // 유저가 나감 : disconnect 이벤트 발생했음
  // 유저가 나갔음을 알려주는 이벤트
  // : disconnected를 emit해줘야함
};

export default socketController;
