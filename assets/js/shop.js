let cartBtn = document.querySelectorAll('.add-to-cart')

cartBtn.forEach((button) => {
    button.addEventListener('click', addToCartButtonClick)
})

function addToCartButtonClick(event) {
    let button = event.target
    let firstDiv = button.parentElement.parentElement
    let secondDiv = button.parentElement
    // console.log(itemDiv.firstElementChild)
    let itemName = firstDiv.firstElementChild.innerHTML
    let itemPrice = secondDiv.firstElementChild.innerHTML
    console.log(itemName, itemPrice)
    addToCart(itemName, itemPrice)
    updateCost()
}

function addToCart(itemName, itemPrice) {
    let cartDiv = document.querySelector('.js-cart-div')
    let cartRow = document.createElement('div')
    let cartRowInfo = `
        <div class="cart-row">
            <div class="name-and-price">
                <h2 class="cart-name">${itemName}</h2>
                <h2 class="js-cart-price cart-price">${itemPrice}</h2>
            </div>

            <div class="delete-and-quantity">
                <input type="number" class=" js-cart-input cart-input" value="1">
                <button class="delete-button">Delete</button>
            </div>
        </div>
    `

    cartRow.innerHTML = cartRowInfo
    cartDiv.append(cartRow)
    cartRow.querySelector('.delete-button').addEventListener('click', removeFromCart)
    cartRow.querySelector('.cart-input').addEventListener('change', updateCost)
}

function removeFromCart(event) {
    let button = event.target
    let parent = button.parentElement.parentElement
    parent.remove()
    updateCost()
}

function updateCost() {
    let totalCost = 0
    let costElement = document.querySelector('.total-cost-header')
    let cartDiv = document.querySelector('.js-cart-div')
    let cartRows = cartDiv.querySelector('.cart-row')

    let itemPrice = cartRows.querySelector('.js-cart-price').innerHTML
    let cost = parseFloat(itemPrice.replace('$', ''))
    let itemQuantity = cartRows.querySelector('.js-cart-input').value
    
    totalCost += cost * itemQuantity
    // console.log(totalCost)


    // for (let i = 0; i < cartRows.length; i++) {
    //     let cartRow = cartRows[i]
    //     let itemPrice = cartRow.querySelector('.js-cart-price').innerHTML
    //     let itemQuantity = cartRow.querySelector('.js-cart-input')
    //     let quantity = itemQuantity.value
    //     let cost = parseFloat(itemPrice.replace('$', ''))
    //     totalCost = totalCost + (cost * quantity)
    // }
    
    costElement.innerHTML = 'Total cost: $ ' + totalCost
    console.log(totalCost)
}

