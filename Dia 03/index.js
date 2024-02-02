// CRIANDO UM OBJETO (LIVRO)
// UM OBJETO COM TRÊS PROPRIEDADES
// UMA FACTORY

function createBook(title, author, pages) { // FACTORY DE OBJETOS

    let book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function() {
            console.log('printing..')
        }
    }
    return book
}

const bookOne = createBook('Atomic', 'James', 306)
const bookTwo = createBook('Think', 'Napolean', 450)

bookOne.color = 'white' // adicionando propriedades

console.log(bookOne)
console.log(bookTwo)

// FUNÇÃO DENTRO DE UM OBJETO