let verifyUser = (newemail, newpassword) => {

    let signupData = JSON.parse(localStorage.getItem("signupData"));
    for (let ele of signupData) {
      let { email, password } = ele;
      if (email == newemail && newpassword == password) {
        alert("Login successful!");
  
        return true;
      } else if (email == newemail && newpassword != password) {
        alert("Wrong credentials");
        return false;
      }
    }
  
    alert("User doesn't exist, Sign Up");
    return false;
  };
  
  let signupData = JSON.parse(localStorage.getItem("signupData"));
  let login = localStorage.getItem("login") || false;
  
  function singData(e, p) {
    (this.email = e), (this.password = p);
  }
  
  function sigin(e) {
    // e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // let d=new singData(email,password)
    // console.log(d)
    // console.log(d.email)
    let emai = (document.getElementById("email").value = "");
    let pass = (document.getElementById("password").value = "");
  
    if (verifyUser(email, password) === true) {
      localStorage.setItem("login", true);
      window.location.href = "index.html";
    } else {
      localStorage.setItem("login", false);
      return;
    }
  }