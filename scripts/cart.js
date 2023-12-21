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

