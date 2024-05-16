/*
6- contruir app de aumento salarial de 15%
*/

let salario = Number(window.prompt("Qual seu salário atual? "));

let bonus = salario * 0.15;

let aumento = salario + bonus;


window.alert("Seu novo salário será de : R$ " + aumento);