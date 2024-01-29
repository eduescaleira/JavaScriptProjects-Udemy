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

// OPERADORES LÓGICOS COM STRINGS/NUMBERS

let corCliente = 'White'
let corEstoque = 'Black'
let corVendida = corCliente || corEstoque

console.log(corVendida)

// IF ELSE

let newDriverSpeed = 111

if (newDriverSpeed > 110) {
    console.log('Driving too fast!')
} else if (newDriverSpeed <= 110 && newDriverSpeed >= 40) {
    console.log('Speed OK')
} else {
    console.log('Driving too slow!')
}

// SWITCH e CASE

let airport = 'AAA'

switch (airport) {
    case 'MCO': 
        console.log('Orlando')
        break
    case 'JFK':
        console.log('John. F. Kennedy')
        break
    case 'SEA':
        console.log('Seattle')
        break
    default:
        console.log('Unknown')
}

// FOR LOOP

for (i = 1; i <= 10; i++) { // VARIÁVEL ; CONDIÇÃO ; INCREMENTO
    console.log("For Loop Número " + i)
}

// WHILE LOOP

i = 1

while (i <= 10) {
    console.log("While Loop Número " + i++)
}

// DO WHILE LOOP (NÃO É MUITO UTILIZADO)

n = 1

do {
    console.log("Do While número ", n++)
} while (n <= 10)

// FOR IN LOOP

const myCar = {
    model: 'BMW',
    year: 2020,
    km: 68000
} 

for (let i in myCar) {
    console.log(i, myCar[i])
}