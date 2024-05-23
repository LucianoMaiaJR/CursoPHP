/*
14- contruir app de média de nota com quatro notas e acima de 6 é aprovado
*/

// Declaração de variáveis com Entrada de Dados.
let nota1 = Number (window.prompt("Digite o 1o nota: "));
let nota2 = Number (window.prompt("Digite o 2o nota: "));
let nota3 = Number (window.prompt("Digite o 3o nota: "));
let nota4 = Number (window.prompt("Digite o 4o nota: "));

// Declaração de variáveis e operações.
let med = (nota1 + nota2 + nota3 + nota4) / 4

if (med < 6) {
    let msg = "Aluno Reprovado"
    window.alert(msg);
} else {
    let msg = "Aluno Aprovado"
    window.alert(msg);
}

// Saída de Dados no Alert do Navegador.
