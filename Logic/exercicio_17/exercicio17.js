/*
17- contruir app da igual 14, porém  <4 é reprovado, 4< >7 aluno em recuperação, 
se está em recuperação, pedir nota da recuperaçao, se nota for menor que 5 reprovado, caso contrário aprovado.
*/

let nota1 = Number (window.prompt("Digite o 1o nota: "));
let nota2 = Number (window.prompt("Digite o 2o nota: "));
let nota3 = Number (window.prompt("Digite o 3o nota: "));
let nota4 = Number (window.prompt("Digite o 4o nota: "));

// Declaração de variáveis e operações.
let med = (nota1 + nota2 + nota3 + nota4) / 4

if (med < 4) {
    window.alert("Reprovado!");
} else if (med >= 4 && med < 7) {
    window.alert("Recuperação!")
    
    let recuperacao = Number (window.prompt("Digite a nota: "));

    if (recuperacao >= 5) {
        window.alert("Aprovado!");
    } else {
        window.alert("Reprovado!");
    }
} else {
    window.alert("Aprovado!");
}