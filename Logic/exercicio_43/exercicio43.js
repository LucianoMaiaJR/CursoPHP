/*
43- Construa uma página/programa onde o usuário digitará sete números e o programa escreverá, 
na tela, quantos deles são pares e quantos são ímpares.
*/

// Declaração de variáveis com Entrada de Dados.
let num1 = Number (window.prompt("Digite o 1o número: "));
let num2 = Number (window.prompt("Digite o 2o número: "));

// Declaração de variáveis e operações.
let res = num1 + num2;
let msg = num1 + " + " + num2 + " = " + res;

// Saída de Dados no Alert do Navegador.
window.alert(msg);