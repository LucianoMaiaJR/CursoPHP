/*
11- contruir app que mostra o menor número na tela/alerta
*/

// Declaração de variáveis com Entrada de Dados.
let num1 = Number (window.prompt("Digite o 1o número: "));
let num2 = Number (window.prompt("Digite o 2o número: "));



// Declaração de variáveis e operações.
if (num1 > num2) {
    let msg = "O número " + num2 + " é o menor"
    window.alert(msg)
} else {
    let msg = "O número " + num1 + " é o menor"
    window.alert(msg)
}