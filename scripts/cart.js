var gettAllid=JSON.parse(sessionStorage.getItem("prod_id_InSessionStorage"));
// console.log(gettAllid);
// console.log(gettAllid.length);


var carts;
// var addToCartButtons = document.getElementsByClassName("add-to-cart-button");
var xhr = new XMLHttpRequest();
xhr.open("GET", "../JSON/products.json");
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    carts = JSON.parse(xhr.responseText);
    draw_products(carts);
    // console.log(allproducts);
    // for (let i = 0; i < addToCartButtons.length; i++) {
    //   var button = addToCartButtons[i];
    //   button.addEventListener("click", addToCartClicked);
    // }
  }
};
xhr.send();

var allCart = document.getElementById("allCart");
var j=0;
// console.log(j);
function draw_products(carts) {
    // console.log(j);
  for (var i = 0; i < carts.length; i++) {
    if (carts[i].product_id == gettAllid[j]){
      var cart = document.createElement("div");
      var img = document.createElement("img");
      var h2 = document.createElement("h2");
      var h3 = document.createElement("h3");
      var button = document.createElement("button");
      // var input = document.createElement("input");

      img.classList.add("product-image");
      img.setAttribute("alt", "Product Image");
      h2.classList.add("product-name");
      h3.classList.add("product-cost");
      button.classList.add("add-to-cart-button");
      cart.classList.add("cart");
      // input.setAttribute("type", "hidden");
      // input.classList.add("cart-input");

      img.src = carts[i].photo;
      h2.textContent = carts[i].product_name;
      h3.textContent = carts[i].product_cost;
      button.textContent = "Add to Cart";
      // input.value = allproducts[i].product_id;

      cart.appendChild(img);
      cart.appendChild(h2);
      cart.appendChild(h3);
      cart.appendChild(button);
      cart.appendChild(input);

      allCart.appendChild(cart);
    //   console.log(j);
    //   j++;
      console.log(j);

      // if(j>allCart.length){ 
      // console.log(j);
      //   break;
      //   };
      j++;
      console.log(j);

    }
  }
}


