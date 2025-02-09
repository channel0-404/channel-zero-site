const messages = [
    "Signal compromised...",
    "You aren't listening...",
    "404 ERROR: UNAUTHORIZED ACCESS",
    "Transmission will resume shortly...",
    "Warning: Unknown interference detected...",
    "Coordinates received: ██.███, ██.███",
    "The broadcast is unstable..."
];

function updateMessage() {
    let messageBox = document.getElementById("message");
    let randomIndex = Math.floor(Math.random() * messages.length);
    messageBox.textContent = messages[randomIndex];
}

// Update message every 50 seconds
setInterval(updateMessage, 5000);
