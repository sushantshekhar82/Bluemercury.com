function getData(e,n,l,p){
    this.email=e,
    this.fristname=n,
    this.lastname=l,
this.password=p
 
}


let arr=JSON.parse(localStorage.getItem("signupData"))||[]

function singup(){
     console.log("yes")
    let email=document.getElementById("email").value
let name=document.getElementById("fristname").value
let lastname=document.getElementById("lastname").value

let password=document.getElementById("password").value


let p=new getData(email,name,lastname,password,)
console.log(p)

// alert("signup seccessfully")

// alert("signup seccessfully")

arr.push(p)

localStorage.setItem("signupData",JSON.stringify(arr))
let emai=document.getElementById("email").value=""
let na=document.getElementById("fristname").value=""
let last=document.getElementById("lastname").value=""

let pass=document.getElementById("password").value=""



// window.replace.href="login.html"


}