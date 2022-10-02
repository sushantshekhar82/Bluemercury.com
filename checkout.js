let cart_data = JSON.parse(localStorage.getItem('cart'))
let sum = 0;
for (let i = 0; i < cart_data.length; i++) {
    sum += cart_data[i].price
}

let subtotal = document.getElementById('subtotal')
subtotal.innerText = `$${sum}`
document.getElementById('total').innerText = `$${sum}`

let discount = () => {
    let coupon = document.getElementById('gift_card').value;
    if (coupon = "MASAI90") {
        document.getElementById('total').innerText = `$${sum - 90}`
    }


}


let payment = () => {
    let email = document.getElementById('email').value;
    let country = document.getElementById('country').value;
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let address = document.getElementById('address').value;
    let apartment = document.getElementById('apartment').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    if (email == "" || country == "COUNTRY/REGION" || first_name == "" || last_name == "" || address == "" || apartment == "" || city == "" || state == 'State') {
        alert('please fill out the form')
    } else {
        window.location.href = "./payment.html"
    }

}

let RenderDom = () => {
    let container = document.getElementById('mini-container')
    container.innerHTML = null;

    let cart_data = JSON.parse(localStorage.getItem('cart')) || []
    cart_data.forEach(ele => {
        let img = document.createElement('img')
        img.src = ele.image;
        img.style.width = "80px"
        img.style.height = '80px'

        let price = document.createElement("p")
        price.innerText = `$${ele.price}`

        container.append(img, price)
    });
}
RenderDom()
