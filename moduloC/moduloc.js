var p1 = window.document.getElementsByTagName('p')[1]
document.writeln('<br>Isto é assim:'+ p1.innerHTML)
var corpo = document.body
var title = document.body.querySelector('h1')
p1.style.color = 'blue'
corpo.style.background = '#ccc'
title.style.color = 'red'
var d = document.getElementById('msg')
d.innerText = 'Ola'
d.style.color = 'green'
var text = document.querySelector('div#text')
text.innerText = 'Sou um seletor'
text.style.color = 'black'
var n = document.getElementsByName('msg')[0]
n.innerText = 'Oi'
n.style.color = 'purple'
var c = document.getElementsByClassName('msg')[0]
c.innerText = 'Sou uma clase'
c.style.color = 'yellow'
var texto = document.querySelector('div.text')
texto.innerText = 'Sou um seletor de classe'
texto.style.color = 'cyan'
window.document.writeln('Ola!!')
window.document.writeln(window.navigator.appName)
window.document.writeln(window.document.URL)