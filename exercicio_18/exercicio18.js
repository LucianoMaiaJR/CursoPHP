
/*
5- contruir pedra papel tesoura largarto e spock
*/
let pontuacao_pc = 0;
let pontuacao_user = 0;
let partidas = 0

while (partidas <= 5){
    let pc = (Math.floor(Math.random() * 4)) + 1 ;
    console.log(pc + " pc");
    let escolha = Number(window.prompt("Digite o número correspondente a sua escolha: \n 1- Pedra \n 2- Papel \n 3- Tesoura \n 4- Lagarto \n 5- Spock"));
    console.log(escolha + " esc");

    let pedra = 1;
    let papel = 2;
    let tesoura = 3;
    let lagarto = 4;
    let spock = 5;

    if (pc == escolha) {
        window.alert("Empate");
    } else if  (escolha == NaN && escolha == null) { 
        window.alert("Colocou algo errado né amigo(a)? \nPor favor leia as regras!")
    } else if (escolha < 1 || escolha > 5) {
        window.alert("Colocou algo errado né amigo(a)? \nPor favor leia as regras!")
    } else {
        if (pc == pedra) {
            if (escolha == tesoura || escolha ==  lagarto) {
                window.alert("PC jogou pedra! Você Perdeu!");
                pontuacao_pc++
                partidas++
            } else {
                window.alert("PC jogou pedra! Você Ganhou!");
                pontuacao_user++
                partidas++
            }
        } else if (pc == papel) {
            if (escolha == pedra || escolha == spock) {
                window.alert("PC jogou papel! Você Perdeu!");
                pontuacao_pc++
                partidas++
            } else {
                window.alert("PC jogou papel! Você Ganhou!");
                pontuacao_user++
                partidas++
            }
        } else if (pc == tesoura){
            if (escolha == papel ||  escolha == lagarto) {
                window.alert("PC jogou tesoura! Você Perdeu!");
                pontuacao_pc++
                partidas++
            } else {
                window.alert("PC jogou tesoura! Você Ganhou!");
                pontuacao_user++
                partidas++
            }
        } else if (pc == lagarto){
            if (escolha == papel || spock) {
                window.alert("PC jogou lagarto! Você Perdeu!");
                pontuacao_pc++
                partidas++
            } else {
                window.alert("PC jogou lagarto! Você Ganhou!");
                pontuacao_user++
                partidas++
            }
        } else if (pc == spock){
            if (escolha == tesoura || pedra) {
                window.alert("PC jogou spock! Você Perdeu!");
                pontuacao_pc++
                partidas++
            } else {
                window.alert("PC jogou spock! Você Ganhou!");
                pontuacao_user++
                partidas++
            }
        } else {
            window.alert("Colocou algo errado né amigo(a)? \nPor favor leia as regras!")
        }
    }
    window.alert("Placar: \nVocê: " + pontuacao_user + "\nComputador: " + pontuacao_pc);
}


/*
*/