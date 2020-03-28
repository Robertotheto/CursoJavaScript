function verifica() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')
    if(formularioano.value.length == 0 || formularioano.value > ano){
        alert('[ERROR] VERIFIQUE O ANO E TENTE NOVAMENTE')
    }else{
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(formularioano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','menino.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemhomem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homem.png')
            }else{
                //idoso
                img.setAttribute('src', 'senhor.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'menina.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovemmulher.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.png')
            }else{
                //idoso
                img.setAttribute('src','senhora.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectado  ${genero} com  ${idade} anos`
        resultado.appendChild(img)
    }
}