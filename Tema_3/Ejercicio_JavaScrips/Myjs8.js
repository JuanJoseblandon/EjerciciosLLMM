document.getElementById("pantalla").value = ''
function cero() {
    document.getElementById("pantalla").value += '0'
}
function uno() {
    document.getElementById("pantalla").value += '1'
}
function dos() {
    document.getElementById("pantalla").value += '2'
}
function tres() {
    document.getElementById("pantalla").value += '3'
}
function cuatro() {
    document.getElementById("pantalla").value += '4'
}
function cinco() {
    document.getElementById("pantalla").value += '5'
}
function seis() {
    document.getElementById("pantalla").value += '6'
}
function siete() {
    document.getElementById("pantalla").value += '7'
}
function ocho() {
    document.getElementById("pantalla").value += '8'
}
function nueve() {
    document.getElementById("pantalla").value += '9'
}
function punto() {
    document.getElementById("pantalla").value += '.'
}
function sumar() {
    document.getElementById("pantalla").value += '+'
}
function restar() {
    document.getElementById("pantalla").value += '-'
}
function dividir() {
    document.getElementById("pantalla").value += '/'
}
function multiplicar() {
    document.getElementById("pantalla").value += '*'
}
function igualar() {
    res = eval(pantalla.value)
    document.getElementById("pantalla").value = res
}
function borrar() {
    document.getElementById("pantalla").value = ''
}
