/*
37. Construa um programa/página onde o usuário irá digitar seu nome e cidade de onde está digitando.
 Essas informações passarão para uma função e, caso a cidade seja “Rio de Janeiro”, 
 a resposta, além do nome da pessoa, escreverá “Seja Bem-vindo à Cidade Maravilhosa”. 
 Caso contrário, exibirá apenas o nome e a cidade digitada (utilizar passagem de parâmetros).
*/

let nome = String(prompt("Digite seu nome: "));
let cidade = String(prompt("Digite a cidade que você está: "));
let pessoa = [];
pessoa.push(nome,cidade);

function Pessoa(){
    if (pessoa[1] == "Rio de Janeiro"){
        return alert(pessoa + "\nSeja Bem-vindo à Cidade Maravilhosa");
    } else {
        return alert(pessoa);
    }
}

Pessoa();