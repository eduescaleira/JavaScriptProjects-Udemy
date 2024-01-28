
    console.log(`JavaScript funcionando!`)

    // VARIÁVEIS
    let firstName = `Eduardo`
    console.log(firstName)

    let lastName = `Escaleira`
    console.log(lastName)

    // CONSTANTES

    const price = 30 
    console.log(price)

    // UTILIZANDO O ASI (;)
    // AUTOMATIC SEMICOLON INSERCTION
    // NÃO É NECESSÁRIO UTILIZAR ;

    // TIPOS DE VARIÁVEIS (PRIMITIVOS) // 

    let itemName = 'Pen' // STRING
    let itemPrice = 3  // NUMBER
    let isAvailable = true // BOOLEAN
    let itemColor // UNDEFINED (sem definição)
    let itemConfig = null // NULL

    // OBJETOS

    let pen = {
        itemName: 'Pen',
        itemPrice: 3,
        isAvailable: true,
        itemColor: 'Red'
    }

    pen.itemColor = "Blue"

    console.log(pen)
    console.log(pen.itemColor)

    // ARRAY

    let friendsList = ['José', 'Marcos', 'Eduardo']
    friendsList[2] = 'Diana' // substituição
    console.log(friendsList)

    // FUNCTIONS

    function saleStatus(status, total) {
        console.log(`Transaction ` + status + ` Total amount: $` + total)
    }

    saleStatus(`Approved!`, 30)