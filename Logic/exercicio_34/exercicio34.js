/*
34- construa um programa/pagina onde o user digitará o seu nome e a saída dele será 
seja bem vindo(a) fulano
*/

let nome = String(window.prompt("Qual o seu nome? Nome: "));


function entrega(message) {
    return message = String("Seja bem vindo(a) " + nome);
};

window.alert(entrega(nome));
