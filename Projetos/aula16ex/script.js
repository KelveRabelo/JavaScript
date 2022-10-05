//CONTROLES

let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

//VERIFIFICAO
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
//VERIFICACAO
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
    //VALIDAR SE OS CAMPOS ESTAO VAZIO
    if(isNumero(num.value) && !inLista(num.value, valores))
    {
        alert("Tudo OK!")
    }
    else
    {
        alert("Valor inválido ou já encontrado na lista.")
    }
}
function finalizar()
{

}
