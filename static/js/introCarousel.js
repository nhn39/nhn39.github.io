const slides = document.querySelectorAll(".intro-slide");
const dots = document.querySelectorAll(".intro-dot");

const previous = document.querySelector(".intro-prev");
const next = document.querySelector(".intro-next");

let current = 0;

function showSlide(index) {

    slides[current].classList.remove("active");
    dots[current].classList.remove("active");

    current = (index + slides.length) % slides.length;

    slides[current].classList.add("active");
    dots[current].classList.add("active");
}


next.addEventListener("click", function () {
    showSlide(current + 1);
});


previous.addEventListener("click", function () {
    showSlide(current - 1);
});


dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {
        showSlide(index);
    });

});