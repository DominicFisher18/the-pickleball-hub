let cartBtn = document.querySelectorAll('.add-to-cart')

cartBtn.forEach((button) => {
    button.addEventListener('click', addToCart)
})

function addToCart(event) {
    let button = event.target
    let itemDiv = button.parentElement.parentElement
    let itemName = itemDiv.document.querySelectorAll('.item-name')[0].innerText
    console.log(itemName)
}