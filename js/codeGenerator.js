// Gerador de código inteligente
class CodeGenerator {
    generateCode(language, task) {
        let code = '';
        switch (language) {
            case 'javascript':
                code = this.generateJavascriptCode(task);
                break;
            case 'python':
                code = this.generatePythonCode(task);
                break;
            default:
                code = 'Linguagem não suportada.';
        }
        return code;
    }

    generateJavascriptCode(task) {
        return `// Código gerado para: ${task}
function doTask() {
    console.log('Executando tarefa em Javascript: ${task}');
}`;
    }

    generatePythonCode(task) {
        return `# Código gerado para: ${task}
def do_task():
    print('Executando tarefa em Python: ${task}')`;
    }
}

const codeGenerator = new CodeGenerator();
