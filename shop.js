let cont=document.getElementById('containershop');
let getData= async ()=>{
  let res=await fetch("https://js211mockserver.herokuapp.com/api/projectskincare");
  let data= await res.json();
  console.log(data);
  renderDom(data);
}
getData()

let renderDom=(data)=>{
 cont.innerHTML=null

 data.map(({brand,description,id,image,name,price,pricerange,sort})=>{
     let div=document.createElement('div');
     div.setAttribute("class","productcont")
     let imageproduct=document.createElement('img');
     imageproduct.src=image;
     let brandname=document.createElement('h5');
     brandname.innerText=brand;
     let title=document.createElement('p');
     title.innerText=name;
     let productprice=document.createElement('p');
     productprice.innerText="$"+price
     let divbtnbag=document.createElement('div');
     divbtnbag.setAttribute("class","bagdiv")

     let addtocartbtn=document.createElement('button');
     addtocartbtn.setAttribute('class','addtocarbtn');
     addtocartbtn.innerText="ADD TO BAG"
     divbtnbag.append(addtocartbtn)
     div.append(imageproduct,brandname,title,productprice,divbtnbag)
     cont.append(div);
 })

}
function sorting(){
  
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
  let res=await fetch(`https://js211mockserver.herokuapp.com/api/store?price_gte=4000`);
  let data=await res.json() 
  renderDom(data)
}
let filterless=async ()=>{
  let res=await fetch(`https://js211mockserver.herokuapp.com/api/store?price_lte=4000`); 
  let data=await res.json()
  renderDom(data)
}