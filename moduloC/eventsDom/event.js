var area = document.getElementById('area')
area.addEventListener('click',clicar)
area.addEventListener('mouseenter',entrar)
area.addEventListener('mouseout',saiu)
function clicar(){
    area.innerText = 'Clicou'
    area.style.background = 'red'
}
function entrar(){
    area.innerText = 'Entrou'
}
function saiu(){
    area.innerText = 'Saiu'
    area.style.background = 'green'
}
function somar(){
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.querySelector('div#res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1+n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
}