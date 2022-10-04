function tabuada()
{
    //PEGA O VALOR DO ELEMENTO PELO ID (OBS: POR PADRAO STRING)
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")

    //VERIFICA SE ESTA VAZIO
    if(num.value.length == 0)
    {
        alert("Por favor, digite um número!")
    }
    else
    {
        //CONVERTE A VARIAVEL EM NUMERICO
        let n = Number(num.value)
        let c = 1

        //LIMPA A SECTION
        tab.innerHTML = ''

        while (c < 10)
        {
            //CRIA UM ELEMENTO <option>Value 1</option> no HTML
            let item = document.createElement('option')

            //ADICIONA O TEXTO NO <option>
            item.text = `${n} x ${c} = ${n*c}`
            
            //USADO EM OUTRAS LINGUAGENS PARA SABE O ITEM QUE FOI SLEECIONADO
            item.value = `tab${c}`
            
            //ADICIONA O ELEMENTO FILHO 'ITEM' DENTRO DO <select>
            tab.appendChild(item)

            //ADICIONA MAIS 1 NO CONTADOR
            c++
            
        }
    }
}