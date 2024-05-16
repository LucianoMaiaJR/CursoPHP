/*
20- construa um app que conte de 10 a 0
*/
let count = 10;
let text = "";

while (count >= 0 && count <= 10) {
    text += count + ", ";
    count--
}

window.alert(text);