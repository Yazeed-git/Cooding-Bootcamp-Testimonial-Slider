const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 0;
// slide.style.display = flex;


function prevSlide(){
    counter--;
    if(counter < 0){
        counter = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none'
    });
    slides[counter].style.display = 'flex';
}

function nextSlide(){
    counter++;
    if(counter > slides.length - 1){
        counter = 0
    }
    slides.forEach((slide) => {
        slide.style.display = 'none'
    });
    slides[counter].style.display = 'flex'
}

prevBtn.addEventListener('click', prevSlide);

nextBtn.addEventListener('click', nextSlide);

