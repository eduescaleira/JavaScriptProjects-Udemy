
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Orange']
const btn = document.getElementById('btn')

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener('click', function() {
    const randomColorIndex = getRandomColor()
    const randomColor = colors[randomColorIndex]
    document.body.style.background = randomColor

    // Acessar o elemento com a classe 'color' e definir o conteúdo interno
    document.querySelector('.color').innerHTML = randomColor
})