let knowledgeBase = {
    "qual é a capital da França?": "Paris",
    "quem descobriu a América?": "Cristóvão Colombo"
};

function processMessage(message) {
    // Lógica de resposta com base no aprendizado e nas palavras-chave
    if (knowledgeBase[message]) {
        return knowledgeBase[message];
    } else {
        return "Desculpe, não sei a resposta para isso.";
    }
}

function trainIA(trainingData) {
    const [keyword, response] = trainingData.split(' | ');
    if (keyword && response) {
        knowledgeBase[keyword] = response;
        alert("Treinamento concluído!");
    } else {
        alert("Formato inválido. Use [palavra-chave] | [resposta].");
    }
}
