function carregar()
{
    var foto = document.getElementById("foto")
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12)
    {
        //BOM DIA yellow
        img.src = 'manha.png'
        
    }
    else if (hora >= 12 && hora < 18)
    {
            //BOA TARDE blue
            foto.style.backgroundColor = "red"
    
    }
    else
    {
            //BOA NOITE black
            img.src = 'noite.jpg'
    }
}

