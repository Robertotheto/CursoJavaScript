let numero = [1,4,3,8,5,2,]

console.log(numero)
console.log(`Vou acrescentar um numero no meu vetor ${numero.push(7)}`)
console.log(`Nosso vetor tem os numeros ${numero}`)
console.log(`O nosso vetor tem quantas posições ${numero.length}`)
console.log(`O primeiro valor do vetor é ${numero[0]}`)
console.log(`O meu vetor em ordem ${numero.sort()}`)
let pos = numero.indexOf(9)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor esta na posição ${pos}`)
}
