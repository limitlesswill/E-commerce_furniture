var allproducts;
var addToCartButtons = document.getElementsByClassName("add-to-cart-button");
var Kitchen = document.getElementById("Kitchen");

let kit = [];

var xhr = new XMLHttpRequest();
xhr.open("GET", "../JSON/products.json");
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    allproducts = JSON.parse(xhr.responseText);
    draw_products(allproducts);

    initFilter(kit,Kitchen);
    
    for (let i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i];
      button.addEventListener("click", addToCartClicked);
    }
  }
};
xhr.send();

//////////draw function

function draw_products(allproducts) {
  for (var i = 0; i < allproducts.length; i++) {
    if (allproducts[i].product_category == "Kitchen") {
      var cart = document.createElement("div");
      var img = document.createElement("img");
      var h2 = document.createElement("h2");
      var h3 = document.createElement("h3");
      var button = document.createElement("button");
      var input = document.createElement("input");
      
      
      img.classList.add("product-image");
      img.setAttribute("alt", "Product Image");
      h2.classList.add("product-name");
      h3.classList.add("product-cost");
      button.classList.add("add-to-cart-button");
      cart.classList.add("cart");
      input.setAttribute("type", "hidden");
      input.classList.add("cart-input");
      
      img.src = allproducts[i].photo;
      h2.textContent = allproducts[i].product_name;
      h3.textContent = allproducts[i].product_cost+"$";
      button.textContent = "Add to Cart";
      input.value = allproducts[i].product_id;
      
      
      cart.appendChild(img);
      cart.appendChild(h2);
      cart.appendChild(h3);
      cart.appendChild(button);
      cart.appendChild(input);
      
      
      Kitchen.appendChild(cart);
      kit.push(allproducts[i]);
    }
  }
}


var prod_id_InSessionStorage = [];  //  array that get ids of products in the added it to local storage "empty array when delete local storage"
function addToCartClicked(event) {
  if (sessionStorage.getItem('account') !== null) {

    var button = event.target;
    var _shopItem = button.parentElement;
    var prod_id = _shopItem.getElementsByClassName("cart-input")[0];
    var arr = JSON.parse(sessionStorage.getItem("prod_id_InSessionStorage"));
    if (arr == null) {
      prod_id_InSessionStorage.push(prod_id.value);
      sessionStorage.setItem("prod_id_InSessionStorage", JSON.stringify(prod_id_InSessionStorage));
    } else {
      for (let r = 0; r < prod_id_InSessionStorage.length; r++) {
        if (prod_id_InSessionStorage[r] == prod_id.value) {
          alert("This Item is already added to cart")
          return;
        }
      }
      prod_id_InSessionStorage = JSON.parse(sessionStorage.getItem("prod_id_InSessionStorage"));
      prod_id_InSessionStorage.push(prod_id.value);
      sessionStorage.setItem("prod_id_InSessionStorage", JSON.stringify(prod_id_InSessionStorage));
    }
    notifyNow();
  }
  else {
    openPopup('registerOverlay');
  }
}

// ////////////////////////////////// Login and Register //////////////////////////////////
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
    alert("There is no any account");
    togglePopup("loginOverlay", "registerOverlay");
  } else {
    for (var i = 0; i < account.length; i++) {
      if (account[i].email != email && account[i].password != password) {
        alert("inValid Account");
        togglePopup("loginOverlay", "registerOverlay");
      } else if (account[i].email == email && account[i].password != password) {
        alert("Password Not Correct, please try again");
      } else if (account[i].email == email && account[i].password == password) {
        var user = {
          email: account[i].email,
          password: account[i].password,
        };
        sessionStorage.setItem("account", JSON.stringify(user));
        var userName = document.getElementById("userName");
        var getuserName = JSON.parse(sessionStorage.getItem("account"));
        if (getuserName != null) {
          userName.innerHTML = getuserName.email;
        }

        closePopup("loginOverlay");
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
  sessionStorage.removeItem("prod_id_InSessionStorage");

  var userName = document.getElementById("userName");

  var getuserName = JSON.parse(sessionStorage.getItem("account"));
  if (getuserName == null) {
    userName.innerHTML = "Log in";
  }
}


