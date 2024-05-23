/*
52- construa um programa aonde o usuário irá criar uma classe com nome, idade e altura (em cm).
 o programa dirá se a pessoa é ou não maior de idade.
*/
// Define a classe Pessoa
class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    // Método para verificar se a pessoa é maior de idade
    ehMaiorDeIdade() {
        return this.idade >= 18;
    }
}

// Função principal para criar um objeto Pessoa e verificar se é maior de idade
function main() {
    // Solicitando informações ao usuário
    const nome = prompt("Digite o nome da pessoa:");
    const idade = parseInt(prompt("Digite a idade da pessoa:"), 10);
    const altura = parseInt(prompt("Digite a altura da pessoa em cm:"), 10);

    // Criando uma instância da classe Pessoa
    const pessoa = new Pessoa(nome, idade, altura);

    // Verificando se a pessoa é maior de idade e exibindo o resultado
    if (pessoa.ehMaiorDeIdade()) {
        alert(`${pessoa.nome} é maior de idade.`);
    } else {
        alert(`${pessoa.nome} não é maior de idade.`);
    }
}

// Chamando a função principal para executar o programa
main();

