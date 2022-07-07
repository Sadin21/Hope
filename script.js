// onscroll navbar
window.onscroll = function() {fungsiScroll()};

function fungsiScroll(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("nav").style.backgroundColor = "#2C2E43";
        document.querySelector("#nav .title").style.color = "white";
    } else {
        document.getElementById("nav").style.backgroundColor = "";
        document.querySelector("#nav .title").style.color = "";
        
    }
}

// onclick menu navbar
const tombol = document.querySelector('.menu');
const menu = document.querySelector('#nav ul');

tombol.addEventListener('click', function(){
    menu.classList.toggle('slider');
});

// click gambar gallery
const gallery = document.querySelector('.gallery');
const gambar = document.querySelector('.gambar');

gallery.addEventListener('click', function(ubahGambar) {
    if ( ubahGambar.target.clasname == 'img' ){
        gambar.url = ubahGambar.target.url;
    }
});