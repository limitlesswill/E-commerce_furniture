var allproducts;
var xhr = new XMLHttpRequest();
xhr.open("GET", "../JSON/products.json");
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    allproducts = JSON.parse(xhr.responseText);
    draw_products(allproducts);
    //console.log(allproducts);
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

      img.classList.add("product-image");
      img.setAttribute("alt", "Product Image");
      h2.classList.add("product-name");
      h3.classList.add("product-cost");
      button.classList.add("add-to-cart-button");
      cart.classList.add("cart");

      img.src = allproducts[i].photo;
      h2.textContent = allproducts[i].product_name;
      h3.textContent = allproducts[i].product_cost;
      button.textContent = "Add to Cart";

      cart.appendChild(img);
      cart.appendChild(h2);
      cart.appendChild(h3);
      cart.appendChild(button);

      Bed.appendChild(cart);
    }
  }
}