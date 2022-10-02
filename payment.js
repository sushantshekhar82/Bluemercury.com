document.getElementById("form").addEventListener("submit", Payment)
let ID = ["480848", "123456", "000000", "666666"]


localStorage.setItem("UPI ID's", JSON.stringify(ID))
let UserUpi = JSON.parse(localStorage.getItem("UPI ID's"))


function Payment(event) {
    event.preventDefault()
    let img = document.createElement("img")
    document.querySelector("body").append(img)
    img.src = "https://c.tenor.com/_901zrKQL1gAAAAC/just-a-moment-waiting.gif"
    let Upi = document.getElementById("upi").value;



    let myPromise = new Promise((resolve, reject) => {
        UserUpi.forEach(function (ele, ind) {
            setTimeout(() => {
                if (Upi === ele) {
                    resolve("Ho Gya")

                } else {
                    reject("Oh NO!")
                }
            }, 2000);
        })



    })


    myPromise.then(function (res) {
        console.log("res:", res)
        //window.location.href = "./processing.html"
        img.src = "https://cdn.dribbble.com/users/911154/screenshots/3332845/vfmov3.gif"

    });

    myPromise.catch(function (error) {
        console.log("error:", error)
        //window.location.href = "./processing.html"
        img.src = "https://cdn.dribbble.com/users/34292/screenshots/5371308/expiredfailedpaymentvdrib.gif"
    });

}


//let myPromise = new Promise(function (resolve, reject) {
// let UserUpi = JSON.parse(localStorage.getItem("UPI ID's")) || [];

// for (let i = 0; i < UserUpi.length; i++) {
//     if (UserUpi[i] == Upi) {
//         //resolve("complete")
//     } else {
//         //reject("failed")
//         flag = false
//         //window.location.href = "./InProcess.html}
//     }

// }


// //   });
// if (flag == false) {
//     alert("Entered Wrong UPI")
// } else {
//     alert("correct Upi")
// }



    // myPromise.finally(function () {
    //     img.src = "https://c.tenor.com/K90BQ2VEEd0AAAAC/come-back-sad.gif"
    // })





