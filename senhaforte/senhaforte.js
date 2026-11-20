// Ter pelo menos 8 caracteres.

// Conter pelo menos uma letra maiúscula e uma minúscula.

// Conter pelo menos um número.

// Conter pelo menos um caractere especial (como @, #, $, %).


// expressões regulares são formas de realiazar buscar de textos.
const aprovadorSenha = (senha) =>{
    //verificações da sen
    const temnumero = /[0-9]/.test(senha)
    const tamanhosenha = senha.length
    const temcaracterespecial = /[\W]/.test(senha)
    const temMinuscula = /[a-z]/.test(senha)
    const temMaiuscula = /[A-Z]/.test(senha)

    // apresentações de mensagens para o usuário sobre a senha
    if ( !temnumero) alert("A sua senha não contém números.")
    if ( tamanhosenha < 8) alert("A sua senha é muito pequena.Utilize uma senha de pelo menos 8 caracteres")
    if (!temcaracterespecial) alert("A sua senha não possui caracteres especiais")
    if ((!temMaiuscula) || (!temMinuscula)) alert("A sua senha não possui letras maiúsculas e minúsculas")
    if (temnumero && (tamanhosenha >= 8) && temcaracterespecial && temMaiuscula && temMinuscula) alert("Senha aprovada!!!")
    
  


}
senha = prompt('Digite uma senha: ')
aprovadorSenha(senha)


