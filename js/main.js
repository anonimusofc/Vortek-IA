document.getElementById('send-message').addEventListener('click', function() {
    const message = document.getElementById('message-input').value;
    sendMessageToIA(message);
});

document.getElementById('train-message').addEventListener('click', function() {
    const trainingData = document.getElementById('training-input').value;
    trainIA(trainingData);
});

document.getElementById('mode-toggle').addEventListener('click', function() {
    toggleMode();
});

function sendMessageToIA(message) {
    // Envia a mensagem para a IA, que irá processá-la e responder
    // Aqui a IA pode responder com base nas mensagens e em seu aprendizado
    const response = processMessage(message);
    document.getElementById('messages').innerHTML += `<div class="message">${response}</div>`;
    document.getElementById('message-input').value = ''; // Limpa a caixa de entrada
}

function toggleMode() {
    const isTrainingMode = document.getElementById('training-box').style.display === 'block';
    
    if (isTrainingMode) {
        document.getElementById('training-box').style.display = 'none';
        document.getElementById('chat-box').style.display = 'block';
        document.getElementById('mode-toggle').innerText = 'Alternar para TREINAMENTO';
    } else {
        document.getElementById('chat-box').style.display = 'none';
        document.getElementById('training-box').style.display = 'block';
        document.getElementById('mode-toggle').innerText = 'Alternar para MODO REAL';
    }
}
