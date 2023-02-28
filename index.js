var Mousetrap = require('mousetrap');

var botonUno = document.getElementById('botonUno')
var botonDos = document.getElementById('botonDos')
var botonTres = document.getElementById('botonTres')
var botonCuatro = document.getElementById('botonCuatro')
var botonCinco = document.getElementById('botonCinco')
var botonSeis = document.getElementById('botonSeis')
var botonSiete = document.getElementById('botonSiete')
var botonOcho = document.getElementById('botonOcho')
var botonNueve = document.getElementById('botonNueve')
var botonCero = document.getElementById('botonCero')

var botonSuma = document.getElementById('botonSuma')
var botonResta = document.getElementById('botonResta')
var botonMult = document.getElementById('botonMult')
var botonDiv = document.getElementById('botonDiv')

var botonCL = document.getElementById('botonClear')

var actual = document.getElementById('actual')
var resultado = document.getElementById('resultado')

botonUno.addEventListener('click', clickUno)
botonDos.addEventListener('click', clickDos)
botonTres.addEventListener('click', clickTres)
botonCuatro.addEventListener('click', clickCuatro)
botonCinco.addEventListener('click', clickCinco)
botonSeis.addEventListener('click', clickSeis)
botonSiete.addEventListener('click',clickSiete)
botonOcho.addEventListener('click',clickOcho)
botonNueve.addEventListener('click',clickNueve)
botonCero.addEventListener('click',clickCero)

botonSuma.addEventListener('click', clickSuma)
botonResta.addEventListener('click',clickResta)
botonMult.addEventListener('click', clickMult)
botonDiv.addEventListener('click',clickDiv)

botonCL.addEventListener('click', clickCL )

Mousetrap.bind('1',clickUno)
Mousetrap.bind('2',clickDos)
Mousetrap.bind('3',clickTres)
Mousetrap.bind('4',clickCuatro)
Mousetrap.bind('5',clickCinco)
Mousetrap.bind('6',clickSeis)
Mousetrap.bind('7',clickSiete)
Mousetrap.bind('8',clickOcho)
Mousetrap.bind('9',clickNueve)
Mousetrap.bind('0',clickCero)

Mousetrap.bind('+',clickSuma)
Mousetrap.bind('-',clickResta)
Mousetrap.bind('*',clickMult)
Mousetrap.bind('/',clickDiv)

Mousetrap.bind('backspace',clickCL)


function clickUno (){
    actual.innerHTML+='1'
}

function clickDos(){
    actual.innerHTML+='2'
}

function clickTres(){
    actual.innerHTML+='3'
}

function clickCuatro(){
    actual.innerHTML+='4'
}

function clickCinco(){
    actual.innerHTML+='5'
}

function clickSeis(){
    actual.innerHTML+='6'
}

function clickSiete(){
    actual.innerHTML+='7'
}

function clickOcho(){
    actual.innerHTML+='8'
}

function clickNueve(){
    actual.innerHTML+='9'
}

function clickCero(){
    actual.innerHTML+='0'
}


function clickSuma(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual + valorResultado
    actual.innerHTML = '0'
    
}


function clickResta(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual - valorResultado
    actual.innerHTML = '0'
}


function clickMult(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual * valorResultado
    actual.innerHTML = '0'
  
}


function clickDiv(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual / valorResultado
    actual.innerHTML = '0'
}

function clickCL(){
    resultado.innerHTML = ''
    actual.innerHTML = ''
    
}
