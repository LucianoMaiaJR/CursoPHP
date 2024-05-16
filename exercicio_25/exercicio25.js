/*
25 contrua a sequencia de fibonacci de 0 até 2 mil
*/

let fibonacciA = 0;
let fibonacciB = 1;
let text = "";

while (fibonacciA < 2000) {
    text += (fibonacciA += fibonacciB) + ", ";
}
window.alert(text)