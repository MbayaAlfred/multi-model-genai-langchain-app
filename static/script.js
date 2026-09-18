const modelSelect = document.getElementById("modelSelect");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const chatMessages = document.getElementById("chatMessages");
const welcomeScreen = document.getElementById("welcomeScreen");
const clearChat = document.getElementById("clearChat");


async function sendMessage() {
    const message = messageInput.value.trim();
    const model = modelSelect.value;

    if (!message) {
        return;
    }

    if (!model) {
        alert("Please select a model.");
        return;
    }

    // Hide welcome screen after first message
    welcomeScreen.style.display = "none";

    // Display user message
    addMessage(message, "user");

    messageInput.value = "";
    sendButton.disabled = true;

    try {
        const response = await fetch("/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message,
                model: model
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Unable to generate response");
        }

        addMessage(
            data.response,
            "assistant",
            model,
            data.duration
        );

    } catch (error) {
        addMessage(
            "Error: " + error.message,
            "assistant"
        );
    } finally {
        sendButton.disabled = false;
        messageInput.focus();
    }
}


function addMessage(text, sender, model = "", duration = null) {
    const messageWrapper = document.createElement("div");
    messageWrapper.classList.add("message", sender);

    const messageBubble = document.createElement("div");
    messageBubble.classList.add("message-bubble");
    messageBubble.textContent = text;

    messageWrapper.appendChild(messageBubble);

    if (sender === "assistant") {
        const metadata = document.createElement("div");
        metadata.classList.add("message-meta");

        let metaText = model ? model : "AI";

        if (duration !== null) {
            metaText += ` • ${Number(duration).toFixed(2)}s`;
        }

        metadata.textContent = metaText;
        messageWrapper.appendChild(metadata);
    }

    chatMessages.appendChild(messageWrapper);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


sendButton.addEventListener("click", sendMessage);


messageInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});


clearChat.addEventListener("click", function () {
    chatMessages.innerHTML = "";
    messageInput.value = "";
    modelSelect.value = "";
    welcomeScreen.style.display = "flex";
});
