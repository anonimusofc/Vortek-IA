// Sistema de criação de bots automatizados
class BotCreator {
    constructor() {
        this.bots = [];
    }

    // Criação de um novo bot
    createBot(name, type) {
        const bot = {
            name: name,
            type: type,
            id: this.generateBotID(),
            status: 'active'
        };
        this.bots.push(bot);
        return bot;
    }

    // Geração de ID único para o bot
    generateBotID() {
        return 'bot-' + Math.random().toString(36).substring(2, 15);
    }

    // Obter lista de bots criados
    getBots() {
        return this.bots;
    }
}

const botCreator = new BotCreator();
