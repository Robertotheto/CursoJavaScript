/*var vel = 60
console.log(`A velocidade do meu carro esta ${vel}Km/h`)
if(vel>60){
    console.log('Voce ultrapassou a velocidade permtida, MULTADO')
}
console.log('Dirija sempre com cinto de segurança')*/

function calcular(){
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de<strong> ${vel}Km/h</strong></p>`
    if(vel>60){
        res.innerHTML += `<p>Voce foi <strong>Multado</strong> por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
}
function origem(){
    var pais = document.querySelector('input#txtpais')
    var nacao = document.querySelector('div#nacao')
    var origem = pais.value
    nacao.innerHTML = `<p>O seu país é <strong>${origem.toUpperCase()}</strong></p>`
    if(origem != 'brasil'&&origem != 'Brasil'){
        nacao.style.color = 'red'
        nacao.innerHTML += `<p>Voce é estrangeiro</p>`
        nacao.innerHTML += `<p>Seja bem vindo!!!</p>`
    }else{
        nacao.style.color = 'green'
        nacao.innerHTML += `<p>Entao você é Brasileiro</p>`
        nacao.innerHTML += `<p>Seja bem vindo!!!</p>`
    }
}