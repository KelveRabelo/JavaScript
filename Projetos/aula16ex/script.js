//CONTROLES

let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

//VALIDA SE O NUMERO ESTA DENTRO DO RANGE
function isNumero(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }
    else
    {
        return false
    }
}
//VALIDA SE O NUMERO ESTA NA LISTA
function inLista(n, l)
{
    if(l.indexOf(Number(n)) != -1)
    {
        return true
    }
    else
    {
        return false    
    }
}

function adicionar()
{
    //VALIDAR AS DUAS VALIDACOES ANTERIORES
    if(isNumero(num.value) && ! inLista(num.value, valores))
    {
        //ADICIONA O VALOR NO ARRAY (LISTA)
        valores.push(Number(num.value))
        //CRIA UM ELEMENTO <OPTION>
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else
    {
        alert("Valor inválido ou já encontrado na lista.")
    }
    //LIMPA A CAIXA NUM
    num.value = ''
    //APONTA O CURSO PARA VOLTA A PISCAR
    num.focus()
}
function finalizar()
{
    if(valores.length == 0)
    {
        alert("Adicione valores antes de finalizar.")
    }
    else
    {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores)
        {
            soma = soma + valores[pos]
            media = soma / tot
            if(valores[pos] > maior)
            {
                maior = valores[pos]
            }
            if(valores[pos] < menor)
            {
                menor = valores[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O Valor maior é ${maior}</p>`
        res.innerHTML += `<p>O valor menor é ${menor}</p>`
        res.innerHTML += `<p>A soma total é ${soma}</p>`
        res.innerHTML += `<p>A média é ${media}</p>`
    }
}
