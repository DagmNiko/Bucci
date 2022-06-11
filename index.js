
//Navigation system
let home = document.querySelector('#home');
let shop = document.querySelector('#shop');
let shops = document.querySelector('#shops');
let contact = document.querySelector('#contact');

home.onclick = () => {
  window.location.href = "index.html";
}
shop.onclick = () => {
  window.location.href = "shop.html";
}
shops.onclick = () => {
  window.location.href = "shop.html";
}
contact.onclick = () => {
  window.location.href = "contact.html";
}


// about us styling
let aboutus = document.querySelector('#aboutus');
let faqs = document.querySelector('#faqs');
let wrap = document.querySelector('#wrap');
let line = document.querySelector('#btn-ln');
aboutus.onclick = () => {
  line.style.animation = "aboutus 1s ease-in-out forwards";
  wrap.style.animation = "slide-aboutus 1s ease-in-out forwards";
}
faqs.onclick = () => {
  line.style.animation = "faqs 1s ease-in-out forwards";
  wrap.style.animation = "slide-faqs 1s ease-in-out forwards";
}