let amigo = 
{
    nome:"José", 
    sexo:"M", 
    peso:85.4,
    engorda(p = 0) 
    {
        console.log('Engordou')
        this.peso += p
    }
}
console.log(`${amigo.nome} peso ${amigo.peso}`)