function contar()
{
    let inicio = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

    //VALIDAR SE OS CAMPOS ESTAO VAZIO
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) 
    {
        //alert("[ERRO] Falta dados!")
        res.innerHTML = 'Impossivel contar!'
    }
    else
    {
        res.innerHTML = `Contado: `

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0)
        {
            alert('Passo inválido! Considrando o PASSO 1')
            p = 1
        }
        if (i < f)
        {
            //Contagem Crescente
            for(let c = i; c <= f; c += p)
            {
                res.innerHTML += ` ${c} \u{2799}`
                
            }
        }
        else
        {
            //Contagem Regressiva
            for(let c = i; c >= f; c -= p)
            {
                res.innerHTML += ` ${c} \u{2799}`
            }
        }
            res.innerHTML += '®¿®'
    }
}