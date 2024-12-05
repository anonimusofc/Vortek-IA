// Sistema básico de NLP (Processamento de Linguagem Natural)
class NLP {
    constructor() {
        this.languageModels = {
            'pt-br': this.portugueseModel(),
            'en': this.englishModel()
        };
    }

    // Modelo de NLP para português
    portugueseModel() {
        return {
            greeting: ['oi', 'olá', 'bom dia'],
            farewell: ['tchau', 'adeus']
        };
    }

    // Modelo de NLP para inglês
    englishModel() {
        return {
            greeting: ['hi', 'hello', 'good morning'],
            farewell: ['bye', 'goodbye']
        };
    }

    // Processa a entrada e retorna uma resposta apropriada
    processInput(language, input) {
        const model = this.languageModels[language] || this.languageModels['en'];
        for (let key in model) {
            if (model[key].includes(input.toLowerCase())) {
                return `Você disse ${key}`;
            }
        }
        return 'Desculpe, não entendi.';
    }
}

const nlp = new NLP();
