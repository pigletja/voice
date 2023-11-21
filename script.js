document.getElementById('start-btn').addEventListener('click', startRecognition);
document.getElementById('stop-btn').addEventListener('click', stopRecognition);

var recognition = new window.webkitSpeechRecognition();
recognition.lang = 'ko-KR'; // 한국어 설정
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var transcriptElement = document.getElementById('transcript');

recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var transcript = event.results[last][0].transcript;
    transcriptElement.textContent = transcript;
};

function startRecognition() {
    transcriptElement.textContent = '';
    recognition.start();
}

function stopRecognition() {
    recognition.stop();
}

recognition.onspeechend = function() {
    recognition.stop();
};

recognition.onerror = function(event) {
    transcriptElement.textContent = 'Error occurred in recognition: ' + event.error;
};
