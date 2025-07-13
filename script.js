function showHome() {
    // Hide all sections except the forum post and chat area
    hideAllSections();
    document.getElementById('forum-post').style.display = 'none';
    document.getElementById('chat-area').style.display = 'block';
}

function showSection(sectionId) {
    // Hide all sections first
    hideAllSections();
    
    // Show the selected section
    document.getElementById(sectionId + '-section').style.display = 'block';
}

function hideAllSections() {
    document.getElementById('forum-post').style.display = 'none';
    document.getElementById('chat-area').style.display = 'none';
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('bom-submission-section').style.display = 'none';
    document.getElementById('slot-booking-section').style.display = 'none';
    document.getElementById('queries-section').style.display = 'none';
}

function logout() {
    alert("Logging out...");
    // Logic to handle the logout process
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    
    if (message.trim() !== "") {
        const chatMessages = document.getElementById('chat-messages');
        const newMessage = document.createElement('div');
        newMessage.classList.add('chat-message', 'student');
        newMessage.innerHTML = `<span>Student:</span> ${message}`;
        chatMessages.appendChild(newMessage);
        input.value = ""; // Clear the input field
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    }
}
function viewProjectDetails() {
    var details = document.getElementById("projectDetails");
    if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
    } else {
        details.classList.add("hidden");
    }
}
