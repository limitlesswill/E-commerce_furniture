let min = 0;
let max = 0;

function initFilter(arr, container) {
    var filter_container = document.querySelector(".filter_container");
    filter_container.style = "display:block";

    pulldown();
    writeVal(arr);

    const input = document.querySelector(".filter_container>.filter_show>.filter_content>.filter_group>input:nth-child(1)");

    const range = document.querySelector(".filter_container>.filter_show>.filter_content>.filter_group:nth-child(2)>input");

    input.addEventListener("keyup", () => {
        let product_name = input.value.toLowerCase();

        if (product_name != "" || product_name != " ") {
            container.innerHTML = "";
            for (let x of arr) {
                if (x.product_name.toLowerCase().includes(product_name)) {
                    let cart = document.createElement("div");
                    let img = document.createElement("img");
                    let h2 = document.createElement("h2");
                    let h3 = document.createElement("h3");
                    let button = document.createElement("button");
                    let inp = document.createElement("input");


                    img.classList.add("product-image");
                    img.setAttribute("alt", "Product Image");
                    h2.classList.add("product-name");
                    h3.classList.add("product-cost");
                    button.classList.add("add-to-cart-button");
                    cart.classList.add("cart");
                    inp.setAttribute("type", "hidden");
                    inp.classList.add("cart-input");

                    img.src = x.photo;
                    h2.textContent = x.product_name;
                    h3.textContent = x.product_cost + "$";
                    button.textContent = "Add to Cart";
                    inp.value = x.product_id;


                    cart.appendChild(img);
                    cart.appendChild(h2);
                    cart.appendChild(h3);
                    cart.appendChild(button);
                    cart.appendChild(inp);


                    container.appendChild(cart);
                }
            }
        }
    });

    range.addEventListener("change", () => {
        let price = range.value;

        if (price >= min && price <= max) {
            container.innerHTML = "";
            for (let x of arr) {
                if (price <= parseInt(x.product_cost)) {
                    let cart = document.createElement("div");
                    let img = document.createElement("img");
                    let h2 = document.createElement("h2");
                    let h3 = document.createElement("h3");
                    let button = document.createElement("button");
                    let inp = document.createElement("input");


                    img.classList.add("product-image");
                    img.setAttribute("alt", "Product Image");
                    h2.classList.add("product-name");
                    h3.classList.add("product-cost");
                    button.classList.add("add-to-cart-button");
                    cart.classList.add("cart");
                    inp.setAttribute("type", "hidden");
                    inp.classList.add("cart-input");

                    img.src = x.photo;
                    h2.textContent = x.product_name;
                    h3.textContent = x.product_cost + "$";
                    button.textContent = "Add to Cart";
                    inp.value = x.product_id;


                    cart.appendChild(img);
                    cart.appendChild(h2);
                    cart.appendChild(h3);
                    cart.appendChild(button);
                    cart.appendChild(inp);


                    container.appendChild(cart);
                }
            }
        }
    });
}

function getMinMax(arr) {
    min = max = parseInt(arr[0].product_cost);

    for (let x of arr) {
        let cost = parseInt(x.product_cost)
        if (cost < min)
            min = cost;
        if (cost > max)
            max = cost;
    }
}

function writeMinMax(arr) {
    const left = document.querySelector(".filter_container>.filter_show>.filter_content>.filter_group:nth-child(2)>span:nth-child(1)");
    const right = document.querySelector(".filter_container>.filter_show>.filter_content>.filter_group:nth-child(2)>span:nth-child(3)");

    getMinMax(arr);

    left.textContent = min;
    right.textContent = max;
}

function writeVal(arr) {
    writeMinMax(arr);

    const range = document.querySelector(".filter_container>.filter_show>.filter_content>.filter_group:nth-child(2)>input");

    // const indicator = document.querySelector(".filter_container>.filter_show>.filter_content>.indic");

    const output = document.querySelector(".filter_container>.filter_show>.filter_content>.indic");

    range.addEventListener("input", () => {
        const val = range.value;
        const min = range.min ? range.min : 0;
        const max = range.max ? range.max : 100;
        output.innerHTML = val;
    });

    range.min = min;
    range.max = max;
    range.step = `${(min + max) / arr.length}`;
    output.innerHTML = min;
}

function pulldown() {
    const theShow = document.querySelector(".filter_container>.filter_show");

    const SVG = document.querySelector(".filter_container>.filter_show>svg");

    const allNotSVG = document.querySelector(".filter_container>.filter_show>*:not(svg)");


    theShow.addEventListener("mousedown", () => {
        allNotSVG.style = " transform: translateY(0);";
        SVG.style = "padding-bottom: 2vw;height: 20vw;";
        theShow.style = "height: 20vw;";
    });
}
