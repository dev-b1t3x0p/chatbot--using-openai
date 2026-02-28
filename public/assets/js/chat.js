// Frontend Chat Logic

class Chat {
    constructor() {
        this.messages = [];
        this.chatBox = document.getElementById('chat-box');
        this.inputField = document.getElementById('chat-input');
        this.sendButton = document.getElementById('send-button');

        this.sendButton.addEventListener('click', () => this.sendMessage());
    }

    sendMessage() {
        const message = this.inputField.value;
        if (message.trim()) {
            this.messages.push({ user: 'You', text: message });
            this.updateChat();
            this.inputField.value = '';
            this.getResponse(message); // Simulate response from AI
        }
    }

    updateChat() {
        this.chatBox.innerHTML = '';
        this.messages.forEach(msg => {
            const messageElement = document.createElement('div');
            messageElement.textContent = `${msg.user}: ${msg.text}`;
            this.chatBox.appendChild(messageElement);
        });
    }

    getResponse(message) {
        // Simulate an AI response after a short delay
        setTimeout(() => {
            const response = `AI: Received your message - '${message}'`; // Placeholder response
            this.messages.push({ user: 'AI', text: response });
            this.updateChat();
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Chat();
});