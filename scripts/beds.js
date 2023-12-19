// export{prod_id_InLocalStorage};
var allproducts;
var addToCartButtons = document.getElementsByClassName("add-to-cart-button");
var xhr = new XMLHttpRequest();
xhr.open("GET", "../JSON/products.json");
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    allproducts = JSON.parse(xhr.responseText);
    draw_products(allproducts);
    // console.log(allproducts);
    for (let i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i];
      button.addEventListener("click", addToCartClicked);
    }
  }
};
xhr.send();
//////////draw function

var Bed = document.getElementById("Bed");

function draw_products(allproducts) {
  for (var i = 0; i < allproducts.length; i++) {
    if (allproducts[i].product_category == "Bed") {
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
      h3.textContent = allproducts[i].product_cost;
      button.textContent = "Add to Cart";
      input.value = allproducts[i].product_id;

      cart.appendChild(img);
      cart.appendChild(h2);
      cart.appendChild(h3);
      cart.appendChild(button);
      cart.appendChild(input);

      Bed.appendChild(cart);
    }
  }
}


var prod_id_InSessionStorage = [];  //  array that get ids of products in the added it to local storage "empty array when delete local storage"
function addToCartClicked(event) {
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
}
