// OPERADORES ARITMÉTICOS

let num1 = 3
let num2 = 2

console.log(num1 + num2) // SOMA
console.log(num1 - num2) // SUBTRAÇÃO
console.log(num1 / num2) // DIVISÃO
console.log(num1 * num2) // MULTIPLICAÇÃO
console.log(num1 % num2) // RESTO DA DIVISÃO
console.log(num1 ** num2) // EXPONENCIAL
console.log(num1 + num2++) // INCREMENTO
console.log(num1 - num2--) // REDUÇÃO

// OPERADORES DE ATRIBUIÇÃO

let num3 = 20
num3 += 10 // ATRIBUIÇÃO (20+10)
console.log(num3)

// OPERADORES DE COMPARAÇÃO

let num4 = 3

console.log(num4 > 0)
console.log(num4 >= 0)
console.log(num4 <= 0)
console.log(num4 < 0)
console.log(num4 === 0) // IDENTICO A ...

// OPERADORES DE IGUALDADE

let num5 = "1"
let num6 = 1

console.log(num5 === num6) // IDENTICO A (INCLUSIVE STRING, NUMBER)
console.log(num5 == num6) // IGUAL A, NÃO DIFERENCIA STRING/NUMBER

// OPERADORES TERNÁRIOS

let driverSpeed = 90
let speed = driverSpeed > 110 ? 'Above' : 'Below' // SE A VELOCIDADE FOR MAIOR QUE 110, ELE RETORNA ABOVE, SE FALSO, RETORNA BELOW

console.log(speed)

// OPERADORES LÓGICOS

let temIdadeMinima = true
let temTituloDeEleitor = true
let podeVotar = temIdadeMinima && temTituloDeEleitor
let podeViajar = !podeVotar

console.log(podeVotar)