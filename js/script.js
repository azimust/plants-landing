const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#nav__list').cloneNode(1);
const body = document.body;

function hambHandler(e){
    e.preventDefault();
    hamb.classList.toggle('active')
    popup.classList.toggle('popup__open');
    body.classList.toggle('noscroll')
    renderPopup();
}
function renderPopup(){
    popup.appendChild(menu);
}
hamb.addEventListener('click', hambHandler);

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("popup__open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}