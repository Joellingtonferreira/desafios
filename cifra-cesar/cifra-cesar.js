const cifraCesar = (palavra, deslocamento = 0) =>{
    let nova = [...palavra.toLowerCase()]
    const alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const posicoesIniciais= {
        "a": 0,
        "b": 1,
        "c": 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
        'k': 10,
        'l': 11,
        'm':12,
        'n':13,
        'o':14,
        'p': 15,
        'q': 16,
        'r': 17,
        's': 18,
        't': 19,
        'u': 20,
        'v': 21,
        'w': 22,
        'x': 23,
        'y': 24,
        'z': 25
    }

    for (let i = 0; i < nova.length; i++){
        let posicaoFinal= posicoesIniciais[nova[i]] + deslocamento 
        if(posicaoFinal > 25){
            let excesso = posicaoFinal - 25
            posicaoFinal = -1 + excesso
        }
        nova[i] = alfa[posicaoFinal]
    }

   

return nova.join("")
}



let palavra = prompt("digite uma palavra: ")
let deslocamento = Number(prompt("digite o valor do deslocamento de letras: "))

console.log(cifraCesar(palavra,deslocamento))