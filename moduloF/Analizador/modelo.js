let numero = document.querySelector('input#num')
let lista = document.querySelector('select#selista')
let resultado = document.querySelector('div#resultado')
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value,valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor do ${numero.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    }else{
        alert('Valor invalido ou encontrado na Lista !!!')
    }
    numero.value = ''
    numero.focus()
}
function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores para finalizar !!!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos]< menor)
            menor = valores[pos]
        }
        media = soma / total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>O total de numeros cadastrados são ${total}</p>`
        resultado.innerHTML += `<p>O maior numero informado foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor numero informado foi ${menor}</p>`
        resultado.innerHTML += `<p>A soma dos numeros são ${soma}</p>`
        resultado.innerHTML += `<p>A media dos numeros são ${media}</p>`
    }
}