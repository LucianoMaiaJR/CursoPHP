/*
8- contruir app salario + desconto do vale transporte 6%
*/

let salario = Number(window.prompt("Qual seu salário atual? "));

let vt = salario * 0.06;

let salario_final = salario - vt;


window.alert(
    "O valor do Vale Transporte é de: R$ " + vt + "\n" +
    "Seu salário líquido será de : R$ " + salario_final);