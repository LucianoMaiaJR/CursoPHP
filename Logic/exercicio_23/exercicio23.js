/*
23- construa um app mostrando todas as horas do dia
*/

let count = 1;
let text = "";

while (count <= 24) {
    text += count + "H, ";
    count++
}

window.alert(text);