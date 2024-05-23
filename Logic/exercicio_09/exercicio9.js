/*
9- contruir app de salario, menos 6% transporte, menos 3% plano de saúde, e mostrar o resto.
*/

let salario = Number(window.prompt("Qual seu salário atual? "));

let vt = salario * 0.06;
let ps = salario * 0.03;

let salario_final = salario - (ps + vt);


window.alert(
    "O valor do Plano de Saúde é de: R$ " + ps + "\n" +
    "O valor do Vale Transporte é de: R$ " + vt + "\n" +
    "Seu salário líquido será de : R$ " + salario_final);