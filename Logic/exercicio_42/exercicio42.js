/*
42- Construa um programa/página onde o usuário digitará dez números. 
O programa deverá calcular quantos deles são maiores que dez.
*/

let numbs = [];
let count = 0;

while(count < 8) {
    let number = Number(prompt("selecione um número: "));
    numbs.push(number);
    count++
}

let maioresQueDez = numbs.filter(num => num > 10);

alert("Os números digitados foram: " + numbs.join(", ") + "\nOs números maiores que 10 são: " + (maioresQueDez.length > 0 ? maioresQueDez.join(", ") : "Nenhum"));



