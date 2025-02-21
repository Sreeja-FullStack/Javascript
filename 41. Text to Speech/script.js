let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
let startButton = document.querySelector(".container button"); // Listen button
let stopButton = document.querySelector(".stop"); // Stop button
let startListeningButton = document.querySelector(".listen button"); // Start Listening button
let textArea = document.querySelector("textarea");

// Speech Synthesis - Text to Speech (TTS)
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        speech.voice = voices[0]; // Default to the first voice
        // Populate the voice select dropdown
        voiceSelect.innerHTML = ''; // Clear existing options
        voices.forEach((voice, i) => {
            const option = new Option(voice.name, i);
            voiceSelect.add(option);
        });
    }
};

// Change voice when user selects a new voice from the dropdown
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Start speech synthesis when the Listen button is clicked (Text to Speech)
startButton.addEventListener("click", () => {
    let text = textArea.value;
    if (text.trim() === "") {
        alert("Please enter some text to convert to speech.");
        return;
    }
    speech.text = text;
    window.speechSynthesis.speak(speech);
});

// Stop speech synthesis when the Stop button is clicked
stopButton.addEventListener("click", () => {
    window.speechSynthesis.cancel(); // This stops any ongoing speech
    speech.text = ""; // Clear the current speech text
});

// Speech Recognition - Speech to Text (STT)
let recognition;
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true; // Keep listening even after a pause
    recognition.lang = 'en-US'; // Set language to English

    recognition.onstart = () => {
        startListeningButton.textContent = "Listening...";
    };

    recognition.onresult = (event) => {
        let transcript = event.results[event.results.length - 1][0].transcript;
        textArea.value = transcript; // Display the result in the textarea
    };

    recognition.onerror = (event) => {
        console.error('Error occurred during speech recognition:', event.error);
    };

    recognition.onend = () => {
        startListeningButton.textContent = "Start Listening";
    };
}

// Start listening for speech (Speech to Text)
startListeningButton.addEventListener("click", () => {
    if (recognition) {
        if (startListeningButton.textContent === "Start Listening") {
            recognition.start(); // Start listening for speech
        } else {
            recognition.stop(); // Stop listening for speech
        }
    }
});
