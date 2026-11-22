// O computador deve "pensar" em um número secreto entre 1 e 100. O usuário tenta adivinhar, e a cada tentativa o programa dá uma dica baseada na distância do número secreto:

// Muito Quente: A menos de 5 números de distância.

// Quente: A menos de 15 números de distância.

// Frio: A mais de 15 números de distância.

// O jogo continua até que o usuário acerte, mostrando no final quantas tentativas foram necessárias.

const jogoQuenteFrio = () =>{
    // sorteiando um número
    const num_secreto = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    let distancia = null
    let tentativa = 0
    while(true){

        let usuario = Number(prompt("Qual é um número sorteiado? "))
        tentativa++
        // calculando a distância 
        if (usuario == num_secreto) return alert("Parabéns você acertou! " + "O número era "+ num_secreto+ " .Ao todo foram " + tentativa + " tentativa(s)")
        if (num_secreto > usuario) {distancia = num_secreto - usuario}
        else {distancia = usuario - num_secreto}

        // apresentando mensagens ao usuário com base no valor da distância
        if (distancia < 5) { alert("Muito quente")}
        else if (distancia < 15 && distancia >= 5) {alert("Quente")}
        else if (distancia >= 15) {alert("Frio") }
    }
}
jogoQuenteFrio()