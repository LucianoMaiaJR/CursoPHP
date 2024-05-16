/*
12- contruir app aonde se for maior de idade digita que é maior, se for menor digita menor.
*/

// Declaração de variáveis com Entrada de Dados.
let age = Number (window.prompt("Digite a sua idade: "));

// Declaração de variáveis e operações.
if (age < 18) {
    let msg = "Você é menor de idade"
    window.alert(msg);
} else {
    let msg = "Você é maior de idade"
    window.alert(msg);
}

// Saída de Dados no Alert do Navegador.
window.alert(msg);