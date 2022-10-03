function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano)
    {
        alert("Verifique o ano informado!")
        res.innerHTML = ("Coloque um ano valido!")
    }
    else
    {
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsexo[0].checked)
        {
            genero = 'Homem'
            if(idade >=0 && idade < 10)
            {
                //criança
                alert('Criança')
                img.setAttribute('src', 'imagens/foto-menino')
            }
            else if(idade >= 18 && idade < 50)
            {
                //adulto
                alert('Adulto')
                img.setAttribute('src', 'imagens/foto-homem')
            }
            else
            {
                //idoso
                alert('Idoso')
                img.setAttribute('src', 'imagens/foto-idoso')
            }
        }
        else if(fsexo[1].checked)
        {
            genero = 'Mulher'
            if(idade >=0 && idade < 10)
            {
                //criança
                img.setAttribute('src', 'imagens/foto-menina')
            }
            else if(idade >= 18 && idade < 50)
            {
                //adulto
                img.setAttribute('src', 'imagens/foto-mulher')
            }
            else
            {
                //idosa
                img.setAttribute('src', 'imagens/foto-idosa')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}