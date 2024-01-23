
let search = document.querySelector('#serach-bar');
let searchbox = document.querySelector('.search-box');
let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar');




search.onclick = () =>{
    searchbox.classList.toggle('active');
}

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}
