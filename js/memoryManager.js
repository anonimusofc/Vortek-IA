// js/memoryManager.js
class MemoryManager {
    constructor() {
        this.memories = {};
    }

    // Função para adicionar uma nova memória
    addMemory(key, value) {
        this.memories[key] = value;
    }

    // Função para obter uma memória específica
    getMemory(key) {
        return this.memories[key] || null;
    }

    // Função para apagar uma memória
    deleteMemory(key) {
        delete this.memories[key];
    }

    // Função para listar todas as memórias
    listMemories() {
        return this.memories;
    }
}

module.exports = new MemoryManager();
