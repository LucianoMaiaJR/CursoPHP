/*
27- Construa uma página que só aceite notas escolares entre zero e dez
 (treinamento para controle de erros).
*/
let nota = Number(prompt("Digite sua nota: "));

if (nota >= 0 && nota <= 10){
    alert("Sua nota é: " + nota);
} else if (nota == NaN) {
    alert("Insirua uma nota válida!");
} else {
    alert("A nota inferida está errada.");
}