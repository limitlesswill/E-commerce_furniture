var gettAllid=JSON.parse(sessionStorage.getItem("prod_id_InSessionStorage"));
var totalSalary=document.getElementById("total");
var addToCartClickedSalary=[];

var allCart = document.getElementById("allCart");
var carts;

var xhr = new XMLHttpRequest();
xhr.open("GET", "../JSON/products.json");
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    carts = JSON.parse(xhr.responseText);
    
    for(var j=0;j<gettAllid.length; j++){
  for (var i = 0; i < carts.length; i++) {
    
    
    if (carts[i].product_id==gettAllid[j]){
      
      
     
      var cart = document.createElement("div");
      var img = document.createElement("img");
      var h2 = document.createElement("h2");
      var h3 = document.createElement("h3");
      

      img.classList.add("product-image");
      img.setAttribute("alt", "Product Image");
      h2.classList.add("product-name");
      h3.classList.add("product-cost");
      cart.classList.add("cart");
      

      img.src = carts[i].photo;
      h2.textContent = carts[i].product_name;
      h3.textContent = carts[i].product_cost +"$";
      addToCartClickedSalary.push(parseInt(carts[i].product_cost));

      cart.appendChild(img);
      cart.appendChild(h2);
      cart.appendChild(h3);
      allCart.appendChild(cart);     
    }   
  }
}
  }
  ///// for cost
  var d=0;
  for(x of addToCartClickedSalary){
    d+=x;
    
  }
  
  totalSalary.innerHTML="Total salary equal " + d +"$";
};
xhr.send();

/ ////////////////////////////////// Login and Register //////////////////////////////////
function signup() {
  var account = JSON.parse(localStorage.getItem("account"));
  if (account == null) {
    account = [];
  }

  var username = document.getElementById("username").value;
  console.log(username);
  var email = document.getElementById("email-register").value;
  console.log(email);
  var password = document.getElementById("password-register").value;
  var confirmpassword = document.getElementById("confirmpassword-register").value;

  var error_arr = [];

  var username_notvalid = false;
  var email_notvalid = false;
  var email_foundnotvalid = false;
  var password_notvalid = false;
  var confirmpassword_notvalid = false;

  if (email == "" || email.indexOf("@") == -1) {
    error_arr.push("email required");
    email_foundnotvalid = true;
  }
  if (username == "") {
    error_arr.push("username required");
    username_notvalid = true;
  }

  if (account != null) {
    for (var i = 0; i < account.length; i++) {
      if (email == account[i].email) {
        error_arr.push("email is already uesd");
        email_foundnotvalid = true;
        break;
      }
    }
  }
  if (password == "" || password.length < 8) {
    error_arr.push("passwor must be more than 8 characters");
    password_notvalid = true;
  }
  if (confirmpassword == "") {
    error_arr.push("confirm password required");
    confirmpassword_notvalid = true;
  }
  if (confirmpassword !== password) {
    error_arr.push("confirm password is not equal password");
    confirmpassword_notvalid = true;
  }

  if (username_notvalid || email_notvalid || password_notvalid || confirmpassword_notvalid || email_foundnotvalid) {
    var message = "";
    for (var i = 0; i < error_arr.length; i++) {
      message += error_arr[i] + "\n";
    }
    alert(message);
  }

  else {
    var user = {
      "username": username,
      "email": email,
      "password": password
    }
    account.push(user);
    localStorage.setItem("account", JSON.stringify(account));
    alert("done")
    togglePopup('registerOverlay', 'loginOverlay')
  }
}


function login() {
  var account = JSON.parse(localStorage.getItem("account"));
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (account == null) {
    alert("There is no any account")
    togglePopup('loginOverlay', 'registerOverlay')
  }
  else {
    for (var i = 0; i < account.length; i++) {

      if ((account[i].email != email) && (account[i].password != password)) {
        alert("inValid Account");
        togglePopup('loginOverlay', 'registerOverlay');
      }

      else if ((account[i].email == email) && (account[i].password != password)) {
        alert("Password Not Correct, please try again");
      }

      else if ((account[i].email == email) && (account[i].password == password)) {
        var user = {
          "email": account[i].email,
          "password": account[i].password
        }
        sessionStorage.setItem("account", JSON.stringify(user));
        closePopup('loginOverlay');

        // location.assign("./project1.html");
      }
    }
  }
}

function openPopup(id) {
  document.getElementById(id).style.display = 'flex';
}

function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}

function togglePopup(closeId, openId) {
  closePopup(closeId);
  openPopup(openId);
}

function logOutBtn() {
  sessionStorage.removeItem("account");
  sessionStorage.removeItem("prod_id_InSessionStorage")
}


//////////////// user name in log in
// var getuserName=JSON.parse(sessionStorage.getItem("account"));

// var userName=document.getElementById("userName");

// if(getuserName==null){
  
//   userName.innerHTML="Log in";
  
// }
// else{
  
//   userName.innerHTML=getuserName.email;
// }


