

let url="https://js211mockserver.herokuapp.com/api/skincare"
let getData=async ()=>{
    let res=await fetch(`https://js211mockserver.herokuapp.com/api/skincare`);
    let data=await res.json();
   console.log(data);
    renderDom(data)
}
getData()
let add_product=async ()=>{
    let name=document.getElementById('name').value;
    let price=+(document.getElementById('price').value);
    let description=document.getElementById('description').value;
    let brand=document.getElementById('brand').value;
    let image=document.getElementById('image').value;
    let pricerange=document.getElementById('pricerange').value
    let sort=document.getElementById('sort').value

    let storedata={
        name,
        price,
        description,
        brand,
        image,
        pricerange,
        sort,
        id:Date.now()+name
    }

    let res= await fetch("https://js211mockserver.herokuapp.com/api/skincare",{
        method:"POST",
        body:JSON.stringify(storedata),
        headers:{
            "Content-Type":"application/json",
        }

    })
    console.log(storedata)
    getData()
}



let renderDom=(data)=>{
    let cont=document.getElementById('container');
cont.innerHTML=null;
data.map(({name,price,brand,description,image,id})=>{
  let div=document.createElement('div');
  div.setAttribute('class','item');
  let image1=document.createElement('img');
  image1.src=image;
  let h2=document.createElement('h2');
  h2.innerText=name;
  let h4=document.createElement('h4');
  h4.setAttribute('class','product_price')
  h4.innerText=price;
  let p=document.createElement('p');
  p.setAttribute('class','brand')
  p.innerText="brand name-"+brand;
  let p1=document.createElement('p');
  p1.innerText=description;
  let div1=document.createElement('div');
  div1.setAttribute('class','flexbtn');
  let removebtn=document.createElement('button');
  removebtn.setAttribute('class','remove_item')
  removebtn.innerText="Remove";
  removebtn.onclick=()=>{
       remove(id)
  }
  let updatebtn=document.createElement('button');
  updatebtn.setAttribute('class','update_price')
  updatebtn.innerText="Update price";
  updatebtn.onclick=()=>{
    update(id)
    }
  div.append(image1,h2,h4,p,p1,div1)
  div1.append(removebtn,updatebtn)
  cont.append(div)

})

}

let remove= async (id)=>{
    let res= await fetch(`https://js211mockserver.herokuapp.com/api/skincare/${id}`,{
        method:"DELETE",
        
        headers:{
            "Content-Type":"application/json",
        }
})
     getData()
}


let update=async (id)=>{
  
    const new_price = prompt( `Enter new price`)

    let newAge={price:new_price};

    let res=await fetch(`https://js211mockserver.herokuapp.com/api/skincare/${id}`,{
        method:"PATCH",
        body:JSON.stringify(newAge),
        headers:{
            "Content-Type":"application/json",
        }
    })
    getData()
}

let sortLTH=async ()=>{
    let res=await fetch(`${url}?_sort=price&_order=asc`);
    let data=await res.json()
    renderDom(data)
}
let sortHTL=async()=>{
    let res=await fetch(`${url}?_sort=price&_order=desc`);
    let data=await res.json()
    renderDom(data)
}
let filtergreater=async ()=>{ 
    let res=await fetch(`https://js211mockserver.herokuapp.com/api/skincare?price_gte=4000`);
    let data=await res.json() 
    renderDom(data)
}
let filterless=async ()=>{
    let res=await fetch(`https://js211mockserver.herokuapp.com/api/skincare?price_lte=4000`); 
    let data=await res.json()
    renderDom(data)
}

