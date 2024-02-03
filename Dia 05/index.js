// Function Declaration 

function movie() {
    console.log('The Matrix')
}

movie()

// Function Expression

const car = function() {
    console.log('Tesla')
}

car()

function price(a, b) {
    let total = 0
    for (let value of arguments)
    total += value
return total
}

console.log(price(10, 20, 40))

// CALCULO FINANCIAMENTO DE VEÍCULO

function carLoan(loan, rate, years) {
    return loan * rate / 100 * years
}

console.log(carLoan(20000, 2.5, 5))