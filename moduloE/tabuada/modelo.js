function tabuada(){
    let numero1 = document.getElementById('numero')
    let tabuada1 = document.getElementById('seltabuada')

    if(numero1.value.length == 0){
        alert('Por Favor digite um numero!')
    }else{
        let num = Number(numero1.value)
        let cont = 1
        tabuada1.innerHTML = ''
        while(cont <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num*cont}`
            item.value = `tabuada1${cont}`
            tabuada1.appendChild(item)
            cont++
        }
    }
}