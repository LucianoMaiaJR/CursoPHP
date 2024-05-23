
let count = 0

window.alert("1- Como é corretamente denominado o sistema ambiental caracterizado pelo conjunto de relações estabelecidas entre uma comunidade e o meio ambiente?");
let question1 = window.prompt(" a) População. \n b) Habitat. \n c) Natureza. \n d) Comunidade. \n e) Ecossistema.")
if (question1 == "e") {
    window.alert("Resposta Certa");
    count++
} else {
    window.alert("Resposta Errada");
}

window.alert("2- Assinale a alternativa que NÃO apresenta um problema ambiental:");
let question2 = window.prompt(" a) Caça de diversos animais silvestres. \n b) Retirada da vegetação nativa local. \n c) Infiltração da água da chuva no solo. \n d) Desflorestamento de matas nativas. \n e) Emissão de poluentes atmosféricos.")
if (question2 == "c") {
    window.alert("Resposta Certa");
    count++
} else {
    window.alert("Resposta Errada");
}

window.alert("3- Qual conceito ligado ao meio ambiente defende a manutenção das características naturais do espaço natural, ou seja, sem nenhum tipo de intervenção antrópica?");
let question3 = window.prompt(" a) Conservação ambiental.\n b) Desenvolvimento natural. \n c) Reserva sustentável. \n d) Desenvolvimento social. \n e) Preservação ambiental.")
if (question3 == "e") {
    window.alert("Resposta Certa");
    count++
} else {
    window.alert("Resposta Errada");
}
window.alert("4- O conceito de conservação ambiental implica no uso racional dos recursos naturais. Desse modo, ele está diretamente ligado ao conceito de: ");
let question4 = window.prompt(" a) preservação. \n b) sustentabilidade. \n c) meio natural. \n d) espaço geográfico. \n e) comunidade.")
if (question4 == "b") {
    window.alert("Resposta Certa");
    count++
} else {
    window.alert("Resposta Errada");
}

window.alert("5- Qual foi a primeira grande conferência internacional, realizada pela Organização das Nações Unidas (ONU), sobre o meio ambiente em nível global?");
let question5 = window.prompt(" a) Conferência das Nações Unidas sobre o Meio Ambiente Humano. \n b) Conferência das Nações Unidas para o Meio Ambiente e o Desenvolvimento. \n c) Conferência das Nações Unidas sobre Mudanças Climáticas. \n d) Conferência das Nações Unidas sobre Desenvolvimento Sustentável \n e) Conferência das Nações Unidas sobre Mudanças Ambientais.")
if (question5 == "a") {
    window.alert("Resposta Certa");
    count++
} else {
    window.alert("Resposta Errada");
}

if (count <= 1) {
    window.alert("Sua pontuação foi: " + count + " Você precisa se esforçar mais!!");
} else if (count >= 2 && count <= 4) {
    window.alert("Sua pontuação foi: " + count + " Parabéns mandou bem!!");
}else {
    window.alert("Sua pontuação foi: " + count + " UAU!! Você foi Excelente, Parabéns!!!!!");
}
