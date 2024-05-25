/*
36. Crie um jogo de par ou ímpar onde o computador irá gerar um número 
aleatório e o usuário irá digitar um número. 
Após digitar o número, o programa irá utilizar um vetor para resolver o jogo. 
Se a soma dos números for par, o usuário vence. Se for ímpar, o computador vence.
*/

let numb = Number(prompt("Você é par e eu impar, escolha seu número: "));
let comp = Math.floor(Math.random() * 100);
let resultado = [];
resultado.push(numb,comp);
let soma = resultado[0] + resultado[1];

if (soma % 2 == 0) {
    alert("Joguei " + comp + " e você jogou " + numb + " logo você ganhou!")
} else {
    alert("Joguei " + comp + " e você jogou " + numb + " logo eu ganhei!")
}