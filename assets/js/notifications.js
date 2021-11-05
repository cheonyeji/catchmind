// 다른 유저가 나간 경우

const noti = document.getElementById("jsNotifications");

// 메세지를 div에 띄워주려고 함
const fireNoti = (text) => {
  const n = document.createElement("div");
  n.innerText = text;
  n.className = "notification";
  noti.appendChild(n);
};

export const handleNewUser = ({ nickname }) => {
  fireNoti(`${nickname} is joined!`);
};

export const handleDisconnected = ({ nickname }) => {
  fireNoti(`${nickname} is left!`);
};
