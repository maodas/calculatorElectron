var Mousetrap = require('mousetrap');

var botonUno = document.getElementById('botonUno')
var botonDos = document.getElementById('botonDos')

var botonSuma = document.getElementById('botonSuma')
var actual = document.getElementById('actual')
var resultado = document.getElementById('resultado')

botonUno.addEventListener('click', clickUno)
botonDos.addEventListener('click', clickDos)
botonSuma.addEventListener('click', clickSuma)

Mousetrap.bind('1',clickUno)
Mousetrap.bind('2',clickDos)

Mousetrap.bind('+',clickSuma)

function clickUno (){
    actual.innerHTML+='1'
}

function clickDos(){
    actual.innerHTML+='2'
}

function clickSuma(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual + valorResultado
    actual.innerHTML = '0'
}

