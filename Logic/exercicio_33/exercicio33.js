/*
33- construa um app aonde o user digitara sua idade, se idade for menor de 18 
o programa entrará em uma função listando nomes de programas infantis
caso seja maior de idade entrada em uma outra função com lista de carros e seus respectivos preços.
*/
let idade = Number(window.prompt("Qual a sua idade? Idade: "));

let menor = " One Piece, CDZ, Boku no Hero.";
let maior = " Honda Fit - R$ 43mil, Dodge Ram - R$ 105mil.";

function entrega(idade) {
    if (idade >= 18) {
        return maior
    } else {
        return menor
    };
};

window.alert("Sua idade é " + idade + " anos e você deve gostar de :" + entrega(idade));


