let id = 0;
let slider = document.querySelector(".slider");
let arrowLeft = document.querySelector(".prev");
let arrowRight = document.querySelector(".next");

let slideInterval = setInterval(slide , 2000);

arrowLeft.addEventListener("click" , function(){
    id--;
    if (id < 0) {
        id = images .length -1;
    }
    slide(id);
})
arrowRight.addEventListener("click" , function(){
    id++;
    if (id > images .length -1) {
        id = 0;
    }
    slide(id);
})

const images = ["img1.jpg","img2.jpg","img3.jpg"];

function slide(id) {
    slider.style.backgroundImage = `url(./assets/images/${images[id]})`;
    slider.classList.add(".img-fade");
    setTimeout(() => {
        slider.classList.remove(".img-fade");
    }, 550);

}



