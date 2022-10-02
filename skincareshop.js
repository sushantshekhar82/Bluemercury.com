
let shopitem1=JSON.parse(localStorage.getItem('shop'));
let shopitem=shopitem1[shopitem1.length-1]
let cartitem=JSON.parse(localStorage.getItem('cart'))||[];
let smallpic= document.getElementById("smallpic");
let bigpic=document.getElementById("bigpic");
let info=document.getElementById("info");
let title=document.querySelector('title')
title.innerText=shopitem.name
document.querySelector("#prod").innerText=shopitem.name
function display(shopitem){
    let d= document.getElementById('desc');
 d.innerText=shopitem.description
 let imgdiv=document.getElementById("moreimg")
 let moreimg1=document.createElement('img')
   moreimg1.src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/masterclass-bluemercury_303x303_8b06250d-4cc8-431d-8217-688769352c79_303x303.webp?v=1659551087"
   let moreimg2=document.createElement('img')
   moreimg2.src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluerewards_2_303x303.jpg?v=1635345372"
   let moreimg3=document.createElement('img')
   moreimg3.src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/routine-reboot_303x303.jpg?v=1659115615"
   let moreimg4=document.createElement('img')
   moreimg4.src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/store_events_navigation_303x303.jpg?v=1661983491"
imgdiv.append(moreimg1,moreimg2,moreimg3,moreimg4)
let imgdiv1=document.getElementById("moreimg1") 
let moreimg5=document.createElement('img')
moreimg5.src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Weekend_Winddown_NAV_feature_303x303.jpg?v=1663797029"
let moreimg6=document.createElement('img')
moreimg6.src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/L_S_Nav_Feature_303x303.jpg?v=1663174166"

imgdiv1.append(moreimg5,moreimg6)
   smallimg=document.createElement('img')
    smallimg.src=shopitem.image;
    bigimg=document.createElement('img')
    bigimg.src=shopitem.image;
    let brandname=document.createElement('p');
     brandname.innerText=shopitem.brand;
     let title=document.createElement('p');
     title.innerText=shopitem.name;
     let msg=document.createElement('p')
     msg.innerText="4 interest-free payments of $33.75 with Klarna. Learn More"
     let sort=document.createElement("h5");
     sort.innerText=shopitem.sort;
     sort.style.textTransform="uppercase"
     sort.style.fontSize="17px";
     let desc=document.createElement("p");
     desc.style.fontSize="20px";
     desc.style.textAlign="justify"
     desc.style.color='rgb(133, 130, 130)'
     desc.innerText=shopitem.description
     let productprice=document.createElement('p');
     productprice.innerText="$"+shopitem.price;
     let div=document.createElement('div')
     div.setAttribute('class','btnprice')
     let addtocartbtn=document.createElement('p');
     addtocartbtn.setAttribute('class','addtocarbtn');
     addtocartbtn.innerText="ADD TO BAG";
     div.addEventListener('click',function(){
      addcart(shopitem)
     })
     let p=document.createElement('p')
     p.innerText="$"+shopitem.price

    smallpic.append(smallimg);
 bigpic.append(bigimg);
 div.append(addtocartbtn,p)
 info.append(brandname,title,productprice,msg,sort,desc,div)

}
display(shopitem)

function addcart(el){
    cartitem.push(el)
    localStorage.setItem('cart',JSON.stringify(cartitem));
    window.location.href="skincareshop.html"
    }