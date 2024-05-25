/*
41- Construa uma página/programa onde o usuário digitará oito números, 
o programa escreverá na tela qual deles é o maior e qual deles é o menor.
*/

let numbs = [];
let count = 0;

while(count < 8) {
    let number = Number(prompt("selecione um número: "));
    numbs.push(number);
    count++
}

let maior = Math.max(...numbs);
let menor = Math.min(...numbs);

alert("Os números digitados foram: " + numbs.join(", ") + "\nO maior número é: " + maior + "\nO menor número é: " + menor);