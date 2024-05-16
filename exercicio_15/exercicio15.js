/*
15- contruir app de 3 números e mostra o maior
*/

// Declaração de variáveis com Entrada de Dados.
let num1 = Number (window.prompt("Digite o 1o número: "));
let num2 = Number (window.prompt("Digite o 2o número: "));
let num3 = Number (window.prompt("Digite o 3o número: "));


// Declaração de variáveis e operações.
if (num1 > num2 && num1 > num3) {
    window.alert("O maior número é o: " + num1)
} else if (num2 > num1 && num2 > num3) {
    window.alert("O maior número é o: " + num2)
    
} else {
    window.alert("O maior número é o: " + num3)

}

// Saída de Dados no Alert do Navegador.
