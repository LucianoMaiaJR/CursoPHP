/*
19- Construir um app que exiba na tela os número de 1 a 100
*/

let count = 0;
let text = "";

while (count <= 100) {
    text += count + ", ";
    count++
}

window.alert(text);