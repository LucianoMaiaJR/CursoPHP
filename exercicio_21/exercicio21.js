/*
21- contruir um app que receba um valor e siga dali até 100
*/

let count = Number(window.prompt("Insira um valor de 1 a 100, que continuarei a conta até o 100: "));
let text = "";

while (count <= 100) {
    text += count + ", ";
    count++
}

window.alert(text);