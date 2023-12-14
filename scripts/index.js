//for scrolling
const btn = document.getElementsByClassName("ast-arrow-svg")[0];

window.onload = () => {
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



