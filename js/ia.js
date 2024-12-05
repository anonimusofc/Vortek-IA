// VORTEK-IA/ia.js
const api = require('../VORTEK-API/api');  // Importando funções da API

let memories = {};  // Memória da IA
let conversations = [];  // Histórico de conversas

// Função de inicialização da IA
function initIA() {
    console.log("VORTEK-IA Inicializada com sucesso.");
}

// Função para aprender com novas entradas
function learn(key, value) {
    memories[key] = value;
    console.log(`VorteK-IA aprendeu: ${key} => ${value}`);
}

// Função para gerar respostas baseadas em padrões e memórias
function generateResponse(input) {
    let response = "";

    // Verificando memórias e padrões
    if (memories[input]) {
        response = memories[input];
    } else {
        response = "Desculpe, não sei a resposta para isso ainda...";
    }

    return response;
}

// Função para criar códigos a partir de uma descrição
function createCode(language, description) {
    return api.generateCode(language, description);
}

// Função para apagar memória específica
function clearMemory(key) {
    delete memories[key];
    console.log(`Memória ${key} apagada com sucesso.`);
}

module.exports = { initIA, learn, generateResponse, createCode, clearMemory };
