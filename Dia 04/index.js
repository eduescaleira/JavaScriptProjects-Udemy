const num = [7, 8, 9]
const final = num.pop() // remove o último item da array

// num.push(10, 11, 12) // adiciona no final da array
// num.unshift(1, 20) // adiciona no início
// num.splice(3, 0, 4, 5)




console.log(num)

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the future'},
    {id: 3, movieName: 'The Matrix'}

]

console.log(movies.find(movies => movies.movieName == 'The Matrix')) // ARROW FUNCTION