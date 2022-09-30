let shopitem1=JSON.parse(localStorage.getItem('shop'));
let shopitem=shopitem1[shopitem1.length-1]
let smallpic= document.getElementById("smallpic");
let bigpic=document.getElementById("bigpic");
let info=document.getElementById("info");

function display(shopitem){
    smallimg=document.createElement('img')
    smallimg.src=shopitem.image;
    bigimg=document.createElement('img')
    bigimg.src=shopitem.image;
    let brandname=document.createElement('p');
     brandname.innerText=shopitem.brand;
     let title=document.createElement('p');
     title.innerText=shopitem.name;
     //let sort=document.createElement()
     let productprice=document.createElement('p');
     productprice.innerText="$"+shopitem.price;


    smallpic.append(smallimg);
 bigpic.append(bigimg);
 info.append(brandname,title,productprice)
}
display(shopitem)

