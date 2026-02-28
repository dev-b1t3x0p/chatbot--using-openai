<?php
// Define API response header
header('Content-Type: application/json');

// Dummy data for the example
$response = [
    'status' => 'success',
    'message' => 'This is a response from the chat API.',
    'data' => null
];

// Send the JSON response
echo json_encode($response);
?>