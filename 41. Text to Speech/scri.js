let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => 
        (voiceSelect.options[i]= new Option(voice.name, i)))
}

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})




// speech to text
// Check if the browser supports Speech Recognition
let recognition;
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;  // Keep listening even after a pause
    recognition.lang = 'en-US';     // Set language to English
    recognition.interimResults = true;  // Show partial results (optional)

    // When speech recognition starts
    recognition.onstart = () => {
        console.log("Speech recognition started");
        document.querySelector(".listen button").textContent = "Listening...";
    };

    // When speech recognition returns results
    recognition.onresult = (event) => {
        let transcript = event.results[event.results.length - 1][0].transcript;
        document.querySelector("textarea").value = transcript; // Set the recognized speech to the textarea
    };

    // Handle errors in speech recognition
    recognition.onerror = (event) => {
        console.error('Error occurred during speech recognition:', event.error);
    };

    // When speech recognition ends
    recognition.onend = () => {
        console.log("Speech recognition ended");
        document.querySelector(".listen button").textContent = "Start Listening";
    };

    // Start/Stop listening when the "Start Listening" button is clicked
    document.querySelector(".listen button").addEventListener("click", () => {
        if (recognition) {
            if (document.querySelector(".listen button").textContent === "Start Listening") {
                recognition.start(); // Start listening for speech
            } else {
                recognition.stop(); // Stop listening for speech
            }
        }
    });
} else {
    console.error("Speech recognition is not supported in this browser.");
}
