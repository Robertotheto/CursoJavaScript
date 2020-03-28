//var nome = window.prompt('Qual o seu nome?')
//window.alert('É um grande prazer de conhecer '+ nome + '!')

/*var n1 = Number.parseInt(window.prompt("Informe um numero:"))
ou Number.parseFloat
var n2 = Number.parseInt(window.prompt("Informe outro numero:"))
var soma = n1+n2
window.alert("A soma dos dois numeros:" + soma) concatenação*/
/*var n1 = Number(window.prompt("Informe um numero:"))
var n2 = Number(window.prompt("Informe outro numero:"))
var soma = n1+n2
window.alert(`A soma entre ${n1} e ${n2} é igual:${soma}`)//template string*/
var nome = window.prompt("Qual e o seu nome:")
document.writeln(`Ola, ${nome}! seu nome tem ${nome.length} letras`)
document.writeln(`Seu nome em maiusculo ${nome.toUpperCase()}`)
document.writeln(`O seu nome com letras minusculas ${nome.toLowerCase()}`)