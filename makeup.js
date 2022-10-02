import {footer,navbar} from "./components/navbar.js";
 document.getElementById("footer").innerHTML = footer();
 document.getElementById("navbar").innerHTML = navbar();
let cont=document.getElementById('containershop');
let shopitem=JSON.parse(localStorage.getItem('shop'))||[];

let cartitem=JSON.parse(localStorage.getItem('cart'))||[];
let url="https://js211mockserver.herokuapp.com/api/projectmakeup";
let getData= async ()=>{
  let res=await fetch(`${url}`);
  let data= await res.json();
  console.log(data);
  renderDom(data);
}
getData()

let renderDom=(data)=>{
 cont.innerHTML=null;
let q=0;
 data.map((el,i)=>{
  q++
     let div=document.createElement('div');
     div.setAttribute("class","productcont")
     div.addEventListener('click',function(){
      clickme(el);
     })
     let imageproduct=document.createElement('img');
     imageproduct.src=el.image;
   
     let brandname=document.createElement('h5');
     brandname.innerText=el.brand;
     
     let title=document.createElement('p');
     title.innerText=el.name;
     
     let productprice=document.createElement('p');
     productprice.innerText="$"+el.price;
 
    //  let divout=document.createElement('div');
    //  divout.setAttribute('class','divout')

    //  let divin1=document.createElement('div');
    //  divin1.setAttribute('class','divin1');
    //  let minusbtn=document.createElement('button');
    //  minusbtn.innerText="-"
    //  minusbtn.addEventListener('click',function(){
    //   minitem(q)})
     
    //  let input=document.createElement('input');
    //  input.setAttribute("type","number");
    //  input.setAttribute('class','quantity')
    //  input.setAttribute("id",`${q}`);
    //  input.setAttribute("placeholder","1");
    //  input.setAttribute("value","1")
     
    //  let plusbtn=document.createElement('button');
    //  plusbtn.innerText="+";
    //  plusbtn.addEventListener('click',function(){
    //   maxitem(q)
    //  })
    //  let divin2=document.createElement('div');
    //  divin2.setAttribute('class','divin2')
    // let wishlistbtn=document.createElement('button');
    // wishlistbtn.innerText="WISHLIST"
   
    //  let divbtnbag=document.createElement('div');
    //  divbtnbag.setAttribute("class","bagdiv")

    //  let addtocartbtn=document.createElement('button');
    //  addtocartbtn.setAttribute('class','addtocarbtn');
    //  addtocartbtn.innerText="ADD TO BAG";
    //  addtocartbtn.addEventListener('click',function(){
    //   addcart(el)
    //  })
    //  divin1.append(minusbtn,input,plusbtn);
    //  divin2.append(wishlistbtn)
    //  divout.append(divin1,divin2);
    //  divbtnbag.append(addtocartbtn)
     div.append(imageproduct,brandname,title,productprice)
     cont.append(div);
 })

}

function clickme(el){
shopitem.push(el)
localStorage.setItem('shop',JSON.stringify(shopitem));
window.location.href="makeupshop.html"
}
//  let p=1
// function addcart(el){
//   cartitem.push(el,p);
//   let x=cartitem
//   console.log(cartitem);
// }


// function minitem(q){

//   p--
//   if(p<1){
//     p=1;
//   }
//   document.getElementById(`${q}`).value=p;
//   console.log(q);

//   }
  
// function maxitem(q){

//   p++
 
//   document.getElementById(`${q}`).value= p;
  

//   }


let  sorting= async ()=>{
  let sortvalue=document.getElementById("sortproduct").value;
  if(sortvalue==="all"){
    let res=await fetch(`${url}`);
    let data=await res.json() 
    renderDom(data)
    console.log(data);
  
   }
 if(sortvalue==="bestseller"){
  let res=await fetch(`${url}?sort=bestseller`);
  let data=await res.json() 
  renderDom(data)
  console.log(data);

 }
 if(sortvalue==="newarrival"){
  let res=await fetch(`${url}?sort=newarrival`);
  let data=await res.json() 
  renderDom(data)
  console.log(data);

 }
 if(sortvalue==="plth"){
  let res=await fetch(`${url}?_sort=price&_order=asc`);
  let data=await res.json()
  renderDom(data)
  console.log(data);

 }
 if(sortvalue==="phtl"){
  let res=await fetch(`${url}?_sort=price&_order=desc`);
  let data=await res.json()
  renderDom(data)

 }
}

let filterpricerange= async ()=>{
  let filterpricerange1=document.getElementById("filterpricerange1").value;
  if(filterpricerange1=="all"){
    let res=await fetch(`${url}`);
    let data=await res.json() 
    renderDom(data)
    console.log(data);
  }
if(filterpricerange1=="$0 To $50"){
  let res=await fetch(`${url}?pricerange=$0_To_$50`);
  let data=await res.json() 
  renderDom(data)
  console.log(data);
}
if(filterpricerange1=="$50 To $100"){
  let res=await fetch(`${url}?pricerange=$50_To_$100`);
  let data=await res.json() 
  renderDom(data)
  console.log(data);
}
if(filterpricerange1=="$100 To $200"){
  let res=await fetch(`${url}?pricerange=$100_To_$200`);
  let data=await res.json() 
  renderDom(data)
  console.log(data);
}
if(filterpricerange1=="$200+"){
  let res=await fetch(`${url}?pricerange=$200`);
  let data=await res.json() 
  renderDom(data)
  console.log(data);
}
}

let filterbrand= async ()=>{
  let filterbrand1=document.getElementById("filterbrand1").value;
  if(filterbrand1=="all"){
    let res=await fetch(`${url}`);
    let data=await res.json() 
    renderDom(data)
    console.log(data);
  }
  if(filterbrand1=="NATURA_BISSE"){
    let res=await fetch(`${url}?brand=NATURA_BISSE`);
    let data=await res.json() 
    renderDom(data)
    console.log(data);
  }
  if(filterbrand1=="BOBBI_BROWN"){
    let res=await fetch(`${url}?brand=BOBBI_BROWN`);
    let data=await res.json() 
    renderDom(data)
    console.log(data);
  }
  if(filterbrand1=="BLUEMERCURY"){
    let res=await fetch(`${url}?brand=BLUEMERCURY`);
    let data=await res.json() 
    renderDom(data)
    console.log(data);
  }
 

}
