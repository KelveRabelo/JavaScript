//CRIA UM ARRAY
let num = [5,8,4]

//ADICIONA O CONTEÚDO 6 NO INDICE 3
num[3] = 6

//ADICIONA O CONTEUDO 7 DEPOIS DO ULTIMO ELEMENTO
num.push(7)

//DESCOBRIR O COMPRIMENTO DO ARRAY
num.length

//COLOCA TODOS OS ELEMENTOS EM ORDEM CRESCENTE
num.sort()

//MOSTRAR O CONTEÚDO PELA POSIÇÃO(INDICE)
console.log(`O primeiro valor do vetor é ${num[0]}`)

//MOSTRAR O CONTEÚDO PELA POSIÇÃO(INDICE) USANDO LOOP DE REPETIÇÃO FOR.
for(var pos = 0; pos < num.length; pos ++)
{
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//USADO NAS VERSÕES ATUAIS DO JavaScript Ecma (OBS: FUNCIONA SOMENTE EM ARRAY)
for(var pos in num)
{
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//RETORNA O INDICE DO VALOR INFORMADO DENTRO DO VETOR (OBS: SE RETORNA -1 É PORQUE NÃO ENCONTRO NENHUM VALOR INFORMADO)
var pos = num.indexOf(7)
if(pos == -1)
{
    console.log('O valor não foi encontrado!')
}
else
{
    console.log(`O valor esta na posição: ${pos}`)
}