// scrolling functionality
const btn = document.getElementsByClassName("ast-arrow-svg")[0];

window.document.body.onscroll = () => {
  if (document.body.scrollTop || document.documentElement.scrollTop < 760) {
    btn.style.display = "none";
  } else btn.style.display = "block";
};

btn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


// notification functionality
window.onload = () => {
  notifyNow();
};

function notifyNow() {
  const notify = document.getElementById("notif");

  if (readyNotif()) {
    notify.style.display = "";
    notify.innerHTML = countNotif();
  }
  else
    notify.style.display = "none";
}

function countNotif() {
  let test = sessionStorage.getItem("prod_id_InSessionStorage");
  let prod_id_InSessionStorage = JSON.parse(test);
  return prod_id_InSessionStorage.length;
}

function readyNotif() {
  let x = sessionStorage.getItem("prod_id_InSessionStorage");
  return x != null;
}



