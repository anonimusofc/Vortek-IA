// VORTEK-API/apiHandler.js
const api = require('./api');
const ia = require('../js/ia');  // A IA com as funções principais

// Função para tratar requisição de criação de arquivo
function handleCreateFile(req, res) {
    const { filename, content } = req.body;
    try {
        const result = api.createFile(filename, content);
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Função para tratar requisição de criação de pasta
function handleCreateDirectory(req, res) {
    const { dirName } = req.body;
    try {
        const result = api.createDirectory(dirName);
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Função para processar a geração de código a partir de um prompt
function handleGenerateCode(req, res) {
    const { language, description } = req.body;
    try {
        const code = ia.createCode(language, description);
        res.status(200).json({ code });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Função para ensinar a IA
function handleTeachAI(req, res) {
    const { key, value } = req.body;
    try {
        ia.learn(key, value);
        res.status(200).json({ message: `VorteK-IA aprendeu ${key}: ${value}` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Função para limpar memória da IA
function handleClearMemory(req, res) {
    const { key } = req.body;
    try {
        ia.clearMemory(key);
        res.status(200).json({ message: `Memória ${key} apagada com sucesso.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Exportando as funções para serem usadas no servidor
module.exports = {
    handleCreateFile,
    handleCreateDirectory,
    handleGenerateCode,
    handleTeachAI,
    handleClearMemory
};
