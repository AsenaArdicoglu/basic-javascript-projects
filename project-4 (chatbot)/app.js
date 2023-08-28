const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "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";

const createChatLi = (messsage, className) => {
  // create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${messsage}</p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p>${messsage}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};
const generateResponse = (incomingChatLi) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = incomingChatLi.querySelector("p");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    }),
  };
  // send POST request to API, get response
/!BURAYI SOR FETCH ÇALIŞMIYOR!/
  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data); (mevcut kota aşımı diyor)
      messageElement.textContent = data.choices[0].messsage.content;
    })
    .catch((error) => {
      //console.log(error); for checking
      messageElement.textContent =
        "Opps! Something went wrong. Please try again";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  // console.log(userMessage); check it out
  if (!userMessage) return;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    //Display "thinking ..." message while waiting for the response
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

sendChatBtn.addEventListener("click", handleChat);
