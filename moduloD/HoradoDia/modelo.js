function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var para = document.getElementById('para')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#FFBE6B'
        para.innerHTML = 'Bom Dia'
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#B43127'
        para.innerHTML = 'Boa Tarde'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#031F46'
        para.innerHTML = 'Boa Noite'
    }
}