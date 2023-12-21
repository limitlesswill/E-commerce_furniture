var gettAllid=JSON.parse(sessionStorage.getItem("prod_id_InSessionStorage"));


var allCart = document.getElementById("allCart");
var carts;

var xhr = new XMLHttpRequest();
xhr.open("GET", "../JSON/products.json");
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    carts = JSON.parse(xhr.responseText);
    // draw_products(carts);



    // var x=0;
    for(var j=0;j<gettAllid.length; j++){
  for (var i = 0; i < carts.length; i++) {
    
    
    if (carts[i].product_id==gettAllid[j]){
      
      
     
      var cart = document.createElement("div");
      var img = document.createElement("img");
      var h2 = document.createElement("h2");
      var h3 = document.createElement("h3");
      // var button = document.createElement("button");
      

      img.classList.add("product-image");
      img.setAttribute("alt", "Product Image");
      h2.classList.add("product-name");
      h3.classList.add("product-cost");
      // button.classList.add("add-to-cart-button");
      cart.classList.add("cart");
      

      img.src = carts[i].photo;
      h2.textContent = carts[i].product_name;
      h3.textContent = carts[i].product_cost;
      // button.textContent = "Add to Cart";
      // input.value = allproducts[i].product_id;

      cart.appendChild(img);
      cart.appendChild(h2);
      cart.appendChild(h3);
      // cart.appendChild(button);
      

      allCart.appendChild(cart);
     
  
      
    }
   
    
  }
}
  }
};
xhr.send();

// var allCart = document.getElementById("allCart");



// function draw_products(carts) {
//   var x=0;
  
//   for (var i = 0; i < carts.length; i++) {
//     console.log(x);
   
//     if (gettAllid[x]==carts[i].product_id){
      
//       console.log(x);
     
//       var cart = document.createElement("div");
//       var img = document.createElement("img");
//       var h2 = document.createElement("h2");
//       var h3 = document.createElement("h3");
//       // var button = document.createElement("button");
      

//       img.classList.add("product-image");
//       img.setAttribute("alt", "Product Image");
//       h2.classList.add("product-name");
//       h3.classList.add("product-cost");
//       // button.classList.add("add-to-cart-button");
//       cart.classList.add("cart");
      

//       img.src = carts[i].photo;
//       h2.textContent = carts[i].product_name;
//       h3.textContent = carts[i].product_cost;
//       // button.textContent = "Add to Cart";
//       // input.value = allproducts[i].product_id;

//       cart.appendChild(img);
//       cart.appendChild(h2);
//       cart.appendChild(h3);
//       // cart.appendChild(button);
      

//       allCart.appendChild(cart);
     
  
      
//     }
    
    
//   }
// }


