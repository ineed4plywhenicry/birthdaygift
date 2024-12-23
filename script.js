function checkPassword() {
    // The password that unlocks the letter
    const correctPassword = "only4YourEyes";

    // Get the input value
    const passwordInput = document.getElementById("passwordInput").value;

    // If the password is correct, open the letter
    if (passwordInput === correctPassword) {
        document.getElementById("letterFlap").classList.add("open"); // Flip the letter
        setTimeout(() => {
            // Show the letter content after the animation
            document.getElementById("letterContent").style.display = "block";
            document.getElementById("revealPictureButton").style.display = "block"
        }, 500); // Wait for the flap to open before showing the content
        // Function to reveal the surprise picture
      
    } else {
        alert("Incorrect password. Try again!");
    }
}

function revealMessage(messageNumber) {
    const messageElement = document.getElementById(`message${messageNumber}`);

    if (messageNumber === 1) {
        messageElement.textContent = "You make every day magical.";
    } else if (messageNumber === 2) {
        messageElement.textContent = "I am so lucky to have you in my life.";
    } else if (messageNumber === 3) {
        messageElement.textContent = "Happy Birthday! Here's to many more adventures.";
    }

    messageElement.style.display = "block";
}
function revealSurprisePicture() {
    // Zeige den Container mit dem Bild im Brief an
    document.getElementById("surpriseContainer").style.display = "block"; // Setze display auf block

    // Button ausblenden, nachdem er geklickt wurde
    const button = document.getElementById("revealPictureButton");
    button.style.display = "none";  // Button verschwinden lassen
}
