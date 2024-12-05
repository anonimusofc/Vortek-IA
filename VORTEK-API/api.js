// VORTEK-API/api.js
const fs = require('fs');
const path = require('path');

// Função para criar arquivos
function createFile(filename, content) {
    const filePath = path.join(__dirname, filename);
    fs.writeFileSync(filePath, content, 'utf8');
    return `Arquivo ${filename} criado com sucesso!`;
}

// Função para criar pastas
function createDirectory(dirName) {
    const dirPath = path.join(__dirname, dirName);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        return `Pasta ${dirName} criada com sucesso!`;
    }
    return `A pasta ${dirName} já existe.`;
}

// Função para gerar um código
function generateCode(language, description) {
    // Exemplo de gerador de código básico
    let code = '';
    switch(language.toLowerCase()) {
        case 'javascript':
            code = `// Código gerado em JavaScript: \nconsole.log('${description}');`;
            break;
        case 'python':
            code = `# Código gerado em Python: \nprint('${description}')`;
            break;
        default:
            code = `// Código para ${language} ainda não suportado.`;
            break;
    }
    return code;
}

module.exports = { createFile, createDirectory, generateCode };
