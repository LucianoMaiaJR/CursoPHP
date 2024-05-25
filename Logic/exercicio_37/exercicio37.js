/*
37. Construa um programa/página onde o usuário irá digitar seu nome e cidade de onde está digitando.
 Essas informações passarão para uma função e, caso a cidade seja “Rio de Janeiro”, 
 a resposta, além do nome da pessoa, escreverá “Seja Bem-vindo à Cidade Maravilhosa”. 
 Caso contrário, exibirá apenas o nome e a cidade digitada (utilizar passagem de parâmetros).
*/

// Declaração de variáveis com Entrada de Dados.
let num1 = Number (window.prompt("Digite o 1o número: "));
let num2 = Number (window.prompt("Digite o 2o número: "));

// Declaração de variáveis e operações.
let res = num1 + num2;
let msg = num1 + " + " + num2 + " = " + res;

// Saída de Dados no Alert do Navegador.
window.alert(msg);