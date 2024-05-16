/*
4- contruir app das quatro operações
*/

// Declaração de variáveis com Entrada de Dados.
let num1 = Number (window.prompt("Digite o 1o número: "));
let num2 = Number (window.prompt("Digite o 2o número: "));

// Declaração de variáveis e operações.
let mult = num1 * num2;
let div = num1 / num2;
let som = num1 + num2;
let sub = num1 - num2;

// Saída de Dados no Alert do Navegador.
window.alert(
    "A Soma é: " + som + "\n" +
    "A Subtração é: " + sub + "\n" +
    "A Divisão é: " + div + "\n" +
    "A Multiplicação é: " + mult 
);