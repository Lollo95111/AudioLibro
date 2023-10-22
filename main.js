let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i)=>(voiceSelect.options[i] = new Option(voice.name,i)));
};

voiceSelect.addEventListener("change",() => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click",() => {

speech.text = document.querySelector("textarea").value;

window.speechSynthesis.speak(speech);


})

document.getElementById("fileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const fileContent = e.target.result;
            document.querySelector("textarea").value = fileContent;
            speakText(fileContent);
        };
        reader.readAsText(file);
    }
});

function speakText(text) {
    speech.text = text;
    window.speechSynthesis.speak(speech);
}
