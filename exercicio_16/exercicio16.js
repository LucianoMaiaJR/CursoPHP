/*
5- contruir app de IMC, se maior que 25 "acima do peso ideal" caso contrário, "peso OK"
*/

let altura = Number(window.prompt("Digite sua altura: "));
let peso = Number(window.prompt("Digite seu peso: "));

let imc = (peso / (altura/100)) / (altura/100);
let imc_formatado = imc.toFixed(2);

if (imc > 25) {
    window.alert("Acima do peso! " + imc_formatado);
} else {
    window.alert("Peso OK! " + imc_formatado);

}
