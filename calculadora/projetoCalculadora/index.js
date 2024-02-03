
function calculate() {

let num1 = Number(document.getElementById("num1").value)
let num2 = Number(document.getElementById("num2").value)
let total = 0

   if (document.getElementById('soma').checked) {
        total = num1 + num2
        document.getElementById('resultArea').innerHTML = `O resultado de ${num1} + ${num2} é ${total}`
    } else if (document.getElementById('subtracao').checked) {
        total = num1 - num2
        document.getElementById('resultArea').innerHTML = `O resultado de ${num1} - ${num2} é ${total}`
    } else if (document.getElementById('multiplicacao').checked) {
        total = num1 * num2
        document.getElementById('resultArea').innerHTML = `O resultado de ${num1} * ${num2} é ${total}`
    } else {
        total = num1 / num2
        document.getElementById('resultArea').innerHTML = `O resultado de ${num1} / ${num2} é ${total}`
    }
    
}