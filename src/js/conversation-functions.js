import { conversation } from "./data";

const conversation_container = document.querySelector(".conversation");

let next_message_index = 0;

export const display_next_message = () => {
  const element = conversation[next_message_index];

  conversation_container.innerHTML += `<div class="message message--${element.side}">
            <div class="message__text">
                ${element.text}
            </div>
        </div>`;

  if (conversation.length - 1 > next_message_index) {
    next_message_index++;

    setTimeout(display_next_message, 500);
  }
};
