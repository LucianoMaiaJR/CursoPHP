/*
2- contruir app de elevação
*/

// Declaração de variáveis com Entrada de Dados.
let num1 = Number (window.prompt("Digite o 1o número: "));
let num2 = Number (window.prompt("Quer elevar a quanto? "));

// Declaração de variáveis e operações.
let res = num1 ** num2;
let msg = num1 + " elevado pelo " + num2 + " = " + res;

// Saída de Dados no Alert do Navegador.
window.alert(msg);