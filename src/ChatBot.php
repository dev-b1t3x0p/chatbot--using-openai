<?php

class ChatBot {
    private $apiKey;

    public function __construct($apiKey) {
        $this->apiKey = $apiKey;
    }

    public function sendMessage($message) {
        // Implementation for sending a message to the OpenAI API
    }

    public function receiveResponse() {
        // Implementation for receiving a response from the OpenAI API
    }

    public function chat($message) {
        $this->sendMessage($message);
        return $this->receiveResponse();
    }
}

?>