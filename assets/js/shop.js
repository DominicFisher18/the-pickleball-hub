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
}

function addToCart(itemName, itemPrice) {
    let cartDiv = document.querySelector('.js-cart-div')
    let cartRow = document.createElement('div')
    let cartRowInfo = `
        <div class="cart-row">
            <div class="name-and-price">
                <div class="cart-name">${itemName}</div>
                <div class="cart-price">${itemPrice}</div>
            </div>

            <div class="delete-and-quantity">
                <button class="delete-button">Delete</button>
            </div>
        </div>
    `

    cartRow.innerHTML = cartRowInfo
    cartDiv.append(cartRow)
}