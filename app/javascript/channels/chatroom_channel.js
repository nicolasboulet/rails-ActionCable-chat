// app/javascript/channels/chatroom_channel.js
import consumer from "./consumer";

const messagesContainer = document.getElementById('messages');
if (messagesContainer) {
  const id = messagesContainer.dataset.chatroomId;

  consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
    received(data) {
      messagesContainer.insertAdjacentHTML('beforeend', data);
    },
  });
}
