/*
39- construir um programa que receba um array com 6 digitos enviados pelo usuário
*/

let numbs = [];
let count = 0;

while(count < 6) {
    let number = Number(window.prompt("selecione um número: "));
    numbs.push(number)
    count++
}

window.alert(numbs);