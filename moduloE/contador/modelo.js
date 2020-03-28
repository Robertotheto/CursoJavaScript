function contar(){
    let contadorinicio = document.getElementById('inicio')
    let contadorfim = document.getElementById('fim')
    let contadorpasso = document.getElementById('passo')
    let resultado = document.getElementById('resultado')
    if(contadorinicio.value.length == 0 || contadorfim.value.length == 0 || contadorpasso.value.length == 0){
        alert('[ERROR] Faltam dados!!!')
        resultado.innerHTML = `Impossivel Contar !!!`
    }else{
        resultado.innerHTML = `Contando: <br>`
        resultado.style.color = 'blue'
        let inicio = Number(contadorinicio.value)
        let fim = Number(contadorfim.value)
        let passo = Number(contadorpasso.value)

        if(passo <= 0){
            alert('Passo Invalido !!! Considerando PASSO: 1')
            passo = 1
        }

        if(inicio < fim){
            //Contagem crescente
            for(let c=inicio;c <= fim; c+= passo){
                resultado.innerHTML += ` ${c}\u{1F449}`
            }
        }else{
            //Contagem decrescente
            for(let c = inicio; c >= fim; c -= passo){
                resultado.innerHTML += ` ${c}\u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}