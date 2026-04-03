window.onload = function () {
    let user = window.localStorage.getItem("isUser")
    if(!user){
        window.location.href = "login.html"
    }
}

let products = document.querySelector(".products")
let ProductData = async () => {
    try {
        let product = await fetch("https://api.escuelajs.co/api/v1/products")
        console.log(product)
        let prodData = await product.json()
        console.log(prodData)
        prodData.forEach(element => {
            let card = document.createElement("div")
            card.setAttribute("class", "card")
            let heading = document.createElement("h3")
            let image = document.createElement("img")
            let price = document.createElement("p")

            image.setAttribute("src",element.images[0])
            heading.innerText =element.title.slice(0,20)
            price.innerHTML = `${element.price} $`
            let desc = document.createElement("p")
            desc.innerHTML = element.description.slice(0,40) + "..."

            let btnBox = document.createElement("div")
            let buyNow = document.createElement("button")
            buyNow.innerText = "Buy Now"
            let addToCart = document.createElement("button")
            addToCart.innerText = "Add To Cart"
            btnBox.append(addToCart, buyNow)

            card.append(image, heading, desc, price, btnBox )
            products.append(card)
            

        });
    } catch (error) {
        console.log(error)
    }
}
ProductData()