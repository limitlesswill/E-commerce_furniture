//for scrolling
const btn = document.getElementsByClassName("ast-arrow-svg")[0];
let login;
let popup;
let xit;

window.onload = () => {
    login = document.getElementById("login");
    popup = document.getElementsByClassName("popup")[0];
    xit = document.getElementById("xit");
    login.addEventListener("click", togglePopup);
    popup.addEventListener("click", togglePopup);
    xit.addEventListener("click", togglePopup);

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
}

function togglePopup(e) {
    if (e.target !== this) return;

    let toggle = (popup.style.display == "") || (popup.style.display == "none");

    if (toggle)
        popup.style.display = "flex";
    else
        popup.style.display = "none";
}

function val(x) {
    x.preventDefault();
    console.log(x);
    return false;
}
