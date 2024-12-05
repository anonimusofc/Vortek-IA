// VORTEK-IA/main.js
const ia = require('./ia');  // Importando as funções da IA

// Inicializando a IA
ia.initIA();

document.getElementById('admin-settings').addEventListener('click', () => {
    const senha = prompt("Digite a senha para acessar as configurações exclusivas:");
    if (senha === "SuaSenha123!") {
        alert("Acesso concedido! Redirecionando para configurações exclusivas...");
        window.location.href = "exclusive-settings.html"; // Redireciona para a página de configurações exclusivas
    } else {
        alert("Senha incorreta. Acesso negado.");
    }
});


// Função de interação com o usuário
function userInteraction(userInput) {
    let response = ia.generateResponse(userInput);
    console.log(`VORTEK-IA: ${response}`);
    return response;
}

// Função para aprender algo novo
function teachAI(key, value) {
    ia.learn(key, value);
}

// Função para limpar memória
function clearAIData(key) {
    ia.clearMemory(key);
}

// Função para gerar código
function generateCode(language, description) {
    let code = ia.createCode(language, description);
    console.log(`Código gerado: \n${code}`);
    return code;
}

module.exports = { userInteraction, teachAI, clearAIData, generateCode };
