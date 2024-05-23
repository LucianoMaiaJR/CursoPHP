/*
22- construa um app que conte até 100 partindo de um número do usuário e pegando apenas os pares
*/

let count = Number(window.prompt("Insira um valor de 1 a 100, que continuarei a conta até o 100: "));
let text = "";

while (count <= 100) {
    if (count % 2 == 0){
        text += count + ", ";
    }
    count++
}

window.alert(text);