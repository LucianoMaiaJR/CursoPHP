/*
40- Construa uma página/programa onde o usuário digitará dez números e o programa somará 
e calculará a média dos números digitados.
*/
let numbs = [];
let count = 0;

while(count < 10) {
    let number = Number(prompt("selecione um número: "));
    numbs.push(number);
    count++
}

let sum = (((((((((numbs[0] +  numbs[1]) + numbs[2]) + numbs[3]) + numbs[4]) + numbs[5]) + numbs[6]) + numbs[7]) + numbs[8]) + numbs[9]); 
let result = sum / count

alert(result)