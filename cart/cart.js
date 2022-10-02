// let url = "https://js211mockserver.herokuapp.com/api/projectskincare"
let sum = 0;

let data = JSON.parse(localStorage.getItem('cart')) || []

let RenderDom = (data) => {
    let container = document.getElementById('cart_container')
    container.innerHTML = null;

    data.forEach((ele, ind) => {
        let big_dad = document.createElement('div')
        let dad = document.createElement('div')
        dad.setAttribute('id', 'dad')

        let son1 = document.createElement('div')
        son1.setAttribute('id', 'son1')

        let image = document.createElement('img')
        image.src = ele.image;

        let title = document.createElement('h3')
        title.innerText = ele.brand;

        let name = document.createElement('p')
        name.innerText = ele.name;

        son1.append(image, title, name)

        let son2 = document.createElement('div')
        son2.setAttribute('id', 'son2')

        let price = document.createElement('p')
        price.innerText = `$${ele.price} `

        let div2 = document.getElementById('div')

        let quantity = document.createElement('input')
        quantity.type = 'number';
        quantity.defaultValue = 1;
        quantity.min = 1;
        quantity.setAttribute('id', 'quant')
        quantity.onchange = () => {
            total.innerText = null;
            total.innerText = t_price();
        }

        let remove = document.createElement('button')
        remove.innerText = "Remove"
        remove.setAttribute('id', "remove")
        remove.onclick = () => {
            erase(ind)
        }
        let t_price = () => {
            return ("$" + ele.price * +quantity.value);
        }
        let total = document.createElement('p')
        total.innerText = `${t_price()} `


        son2.append(price, quantity, remove, total)

        let hr = document.createElement('hr')

        dad.append(son1, son2)
        big_dad.append(dad, hr)
        container.append(big_dad)


        sum += (ele.price * +quantity.value);

        let total_amount = document.getElementById('subtotal_price')
        total_amount.innerText = null
        total_amount.innerText = `Subtotal Price($${sum})`
    })
}

RenderDom(data)

let erase = (ind) => {
    let data = JSON.parse(localStorage.getItem('cart')) || []
    data = data.splice(ind, 1)
    console.log(data)
    console.log('ind:', ind)
    RenderDom(data)
}