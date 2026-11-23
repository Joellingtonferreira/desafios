def cifraCesar(palavra, deslocamento = 0):
    nova = list(palavra.lower())
    alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    posicoesiniciais = {
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
        'z': 25}
    for i in range(0,len(nova)):
        posicaofinal = posicoesiniciais[nova[i]] + deslocamento
        if posicaofinal > 25:
            excesso = posicaofinal - 25
            posicaofinal = -1  +  excesso

        nova[i] = alfa[posicaofinal]
                
    
    return "".join(nova)
    

palavra = input("Digite uma palvra: ")
deslocamento = int(input("Digite o deslocamento: "))
print(cifraCesar(palavra,deslocamento))
