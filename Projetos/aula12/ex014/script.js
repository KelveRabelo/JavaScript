function carregar()
{
    var foto = document.getElementById("foto")
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12)
    {
        //BOM DIA yellow
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd9f'
        
    }
    else if (hora >= 12 && hora < 18)
    {
        //BOA TARDE blue
        img.src = 'imagens/tarde.jpeg'
        document.body.style.background = 'orange'
        //foto.style.backgroundColor = "red"
    }
    else
    {
        //BOA NOITE black
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}

