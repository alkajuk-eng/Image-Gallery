/* LOGO SYMBOL TYPING SECTION */
var typed=new Typed(".typed",{
            strings:["&lt;code&gt;","&lt;/dev&gt;","init","system","root","console"],
            typeSpeed:70,
            backSpeed:55,
            loop:true
        }) 

/* TOGGLE BUTTON CHANGES */
const togglebtn = document.querySelector(".togglebtn");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");

togglebtn.addEventListener("click", () => {
    togglebtn.classList.toggle("active");
    menu.classList.toggle("active");
    header.classList.toggle("active");
});

/* SIDEBAR BUTTON CHANGES */
const body = document.body;
const leftbtn = document.querySelector(".left-btn");
const rightbtn = document.querySelector(".right-btn");

leftbtn.addEventListener("click", () => {
    body.classList.add("closed");

    leftbtn.classList.add("active");
    rightbtn.classList.add("active");
});

rightbtn.addEventListener("click", () => {
    body.classList.remove("closed");

    rightbtn.classList.remove("active");
    leftbtn.classList.remove("active");
});

/* VIEW BOX*/
const viewBox = document.querySelector('.view-box');
const fullImg = document.getElementById('fullImg');
const captionTitle = document.getElementById('captionTitle');
const captionParagraph = document.getElementById('captionParagraph');

const figures = document.querySelectorAll('.gallery figure');
let currentIndex = 0;

function renderLightbox() {
    const figure = figures[currentIndex];
    const fullImg_Img = figure.querySelector('img');

    const fullImg_Alt = fullImg_Img.alt;
    const fullImg_Title=fullImg_Img.title;
    
    const figcaptionTitle = figure.querySelector('figcaption h3').textContent;
    const figcaptionDesc = figure.querySelector('figcaption p').textContent;

    fullImg.src = fullImg_Img.src;
    fullImg.alt = fullImg_Alt;
    fullImg.title = fullImg_Title;  

    captionTitle.textContent = figcaptionTitle;
    captionParagraph.textContent = figcaptionDesc;    
}

function showNext() {
    currentIndex = (currentIndex + 1) % figures.length;
    renderLightbox();
}
function showPrev() {
    currentIndex = (currentIndex - 1 + figures.length) % figures.length;
    renderLightbox();
}
function closeViewBox() {
    viewBox.style.display = "none";
}

document.querySelector('.view-box .next-btn').addEventListener('click', showNext);
document.querySelector('.view-box .prev-btn').addEventListener('click', showPrev);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeViewBox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev()
});

/*OPEN FULL IMAGE BOX*/
function openFullImg(figure) {
    currentIndex = Array.from(figures).indexOf(figure);

    renderLightbox();    
    viewBox.style.display = "flex";   
}



