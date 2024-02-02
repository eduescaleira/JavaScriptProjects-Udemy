let productValue = Number(prompt('Enteder de product value:'))

function valueApproved() {
if (productValue < 20) {
    document.getElementById('result').innerHTML = 'Denied'
    document.getElementById('result').style.color = 'red'

    } else {
    document.getElementById('result').innerHTML = 'Approved'
    document.getElementById('result').style.color = 'green'
    }
}

valueApproved()