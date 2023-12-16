//for scrolling
const btn = document.getElementsByClassName("ast-arrow-svg")[0];
// let login;
// let popup;
// let xit;
window.document.body.onscroll = () => {

            if (document.body.scrollTop || document.documentElement.scrollTop < 760) {
                btn.style.display = "none";
            }
            else
                btn.style.display = "block";
        };
    
        btn.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    

// window.onload = () => {
//     login = document.getElementById("login");
//     popup = document.getElementsByClassName("popup")[0];
//     xit = document.getElementById("xit");
//     login.addEventListener("click", togglePopup);
//     popup.addEventListener("click", togglePopup);
//     xit.addEventListener("click", togglePopup);

//     window.document.body.onscroll = () => {

//         if (document.body.scrollTop || document.documentElement.scrollTop < 760) {
//             btn.style.display = "none";
//         }
//         else
//             btn.style.display = "block";
//     };

//     btn.addEventListener("click", () => {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//     });
// }

// function togglePopup(e) {
//     if (e.target !== this) return;

//     let toggle = (popup.style.display == "") || (popup.style.display == "none");

//     if (toggle)
//         popup.style.display = "flex";
//     else
//         popup.style.display = "none";
// }

// function val(x) {
//     x.preventDefault();
//     console.log(x);
//     return false;
// }
///////////////////////////////////////////////////// start GET DATA
var allproducts;
var xhr=new XMLHttpRequest();
xhr.open("GET","../JSON/products.json");
xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
        allproducts=JSON.parse(xhr.responseText);
        draw_products(allproducts);
        //console.log(allproducts);
    }
}
xhr.send();
//////////draw function
var Kitchen=document.getElementById("Kitchen");
var Bed=document.getElementById("Bed");

function draw_products(allproducts){
    for(var i=0;i<allproducts.length;i++){
        if(allproducts[i].product_category=="Kitchen"){
   var cart=document.createElement("div"); 
   var img = document.createElement("img");
   var h2=document.createElement("h2");
   var h3=document.createElement("h3");
   var button=document.createElement("button");

   img.classList.add("product-image");
   img.setAttribute("alt","Product Image");
   h2.classList.add("product-name");
   h3.classList.add("product-cost");
   button.classList.add("add-to-cart-button");
   cart.classList.add("cart");


   img.src=allproducts[i].photo;
   h2.textContent=allproducts[i].product_name;
   h3.textContent=allproducts[i].product_cost;
   button.textContent="Add to Cart";

   cart.appendChild(img);
   cart.appendChild(h2);
   cart.appendChild(h3);
   cart.appendChild(button);

   

   Kitchen.appendChild(cart);}
   

}
for(var i=0;i<allproducts.length;i++){
    if(allproducts[i].product_category=="Bed"){
var cart=document.createElement("div"); 
var img = document.createElement("img");
var h2=document.createElement("h2");
var h3=document.createElement("h3");
var button=document.createElement("button");

img.classList.add("product-image");
img.setAttribute("alt","Product Image");
h2.classList.add("product-name");
h3.classList.add("product-cost");
button.classList.add("add-to-cart-button");
cart.classList.add("cart");


img.src=allproducts[i].photo;
h2.textContent=allproducts[i].product_name;
h3.textContent=allproducts[i].product_cost;
button.textContent="Add to Cart";

cart.appendChild(img);
cart.appendChild(h2);
cart.appendChild(h3);
cart.appendChild(button);



Bed.appendChild(cart);}


}
}




