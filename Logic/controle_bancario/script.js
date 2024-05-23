// Algorito controle bancario
// Funções
function exibirSaldo(Object, saldo){
    console.log(Object.saldo);
}
function deposito(Object, saldo){
    let valor = 1000;
    Object.saldo += valor
}

// Dados
const cliente = {
    nome: 'Luciano Maia',
    saldo: 50000,
    email: 'maialucianojr@gmail.com',
    senha: '******'
}
const cliente2 = new Object(
    cliente2.nome = 'Fulano',
    cliente2.saldo = 1000,
    cliente2.email = 'fulano@php.com',
    cliente2.senha = '*********'
);

// Teste
deposito(cliente)
deposito(cliente2)

console.log(exibirSaldo(cliente));
console.log(exibirSaldo(cliente2));



//console.log("Fim do Teste");