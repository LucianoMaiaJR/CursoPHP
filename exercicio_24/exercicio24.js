/*
24- construa um app de tabuada
*/
let numb = Number(window.prompt("Insira um valor que criarei a tabuada: "));
let count = 0;
let text = "";

while (count <= 10) {
    text += numb + " x " + count + " = " + count * numb + "\n"
    count++
}

window.alert(text);
