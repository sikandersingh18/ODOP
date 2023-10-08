const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}

// Function to simulate typing animation
function typeText(element, text, delay) {
  let i = 0;
  const typingInterval = setInterval(function () {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval); // Stop the typing animation
    }
  }, delay);
}

// Trigger the typing animation when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const typedNameElement = document.getElementById("typed-name");
  const nameToType = "Jammu & Kashmir - Place where heaven touches the Earth."; // Your last name

  typeText(typedNameElement, nameToType, 100); // Adjust the delay (100ms) for typing speed
});

const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const userMessage = userInput.value;
  displayMessage(userMessage, 'user');

  // Simulate a chatbot response (you can replace this with your chatbot logic)
  setTimeout(() => {
    const chatbotResponse = 'This is a chatbot response.';
    displayMessage(chatbotResponse, 'chatbot');
  }, 1000);

  userInput.value = '';
});

function displayMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.className = `message ${sender}`;
  messageElement.textContent = message;
  chatBody.appendChild(messageElement);

  // Scroll to the bottom of the chat body
  chatBody.scrollTop = chatBody.scrollHeight;
}

// JavaScript to toggle chatbot visibility
document.getElementById('chatbot-icon').addEventListener('click', function() {
  var chatbot = document.getElementById('chatbot');
  chatbot.style.display = chatbot.style.display === 'none' ? 'block' : 'none';
});

// JavaScript to close chatbot
document.getElementById('close-chatbot').addEventListener('click', function() {
  var chatbot = document.getElementById('chatbot');
  chatbot.style.display = 'none';
});

