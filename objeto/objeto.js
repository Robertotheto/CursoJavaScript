let amigo = {
    nome: 'Jose',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`O ${amigo.nome} tem o peso ${amigo.peso}`)