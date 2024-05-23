/*
7- contruir app produto com desconto de 7%
*/

let produto = Number(window.prompt("Qual o valor do produto que você precisa de desconto? "));

let desconto = produto * 0.07;

let valor_final = produto - desconto;

window.alert("O produto que custava R$ " + produto + " agora está custando R$ " + valor_final);