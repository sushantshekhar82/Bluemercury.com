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

      if(email==""||fristname==""||lastname==""||password==""){
        alert("please fill the form")
    }
    else{

let p=new getData(email,name,lastname,password,)
console.log(p)





arr.push(p)
// console.log(arr)
localStorage.setItem("signupData",JSON.stringify(arr))


document.getElementById("email").value=""
document.getElementById("fristname").value=""
document.getElementById("lastname").value=""

document.getElementById("password").value=""


alert("signup seccessfully")
window.location.href="login.html"

}
}
// let user=(newemail)=>{
//     let arr=JSON.parse(localStorage.getItem("signupData"))||[]
// console.log(yes)
//  for(let ele of arr){
//     let {email}=ele
//     if(email==newemail){
//         alert("user all ready exist")
//  return
//     }
// }

// }

// window.replace.href="login.html"


