/*
26. Construa uma página/programa onde o usuário digitará um número,
 a página fará uma contagem regressiva até zero e, depois,
  contará de zero até o número que o usuário digitou.
*/

let numb = Number(prompt("digite um número"));
let count = numb

while (count > 0){
    alert(count);
    count--
}
while (count <= numb){
    alert(count);
    count++
}