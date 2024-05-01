const images = [
    'static/img/1.JPG',
    'static/img/2.JPG',
    'static/img/3.JPG',
    'static/img/4.JPG',
    'static/img/5/JPEG',
];

let isSlideShow = false; // Toggle state


function displayImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';  // Clear the gallery content

    if (isSlideShow) {
        // Display images as a slideshow
        const slideshowContainer = document.createElement('div');
        slideshowContainer.className = 'slideshow';
        images.forEach((img, index) => {
            const imageElement = document.createElement('img');
            imageElement.src = img;
            imageElement.style.display = index === 0 ? 'block' : 'none';  // Show only the first image initially
            slideshowContainer.appendChild(imageElement);
        });
        gallery.appendChild(slideshowContainer);
        enableSlideshowControls(slideshowContainer);
    }else{
    // Display images as a grid
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid';
    images.forEach(img => {
        const imageElement = document.createElement('img');
        imageElement.src = img;
        imageElement.className = 'grid-item';
        gridContainer.appendChild(imageElement);
    });
    gallery.appendChild(gridContainer);
}
}

function enableSlideshowControls(container) {
    let currentSlide = 0;
    const slides = container.querySelectorAll('img');
    function scrollSlides(event) {
        if (event.deltaY > 0) currentSlide++;
        else currentSlide--;
        currentSlide = Math.max(0, Math.min(currentSlide, slides.length - 1));  // Limit the currentSlide index
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? 'block' : 'none';
        });
    }
    container.addEventListener('wheel', scrollSlides, {passive: false});
}

document.getElementById('toggleView').addEventListener('click', () => {
    isSlideShow = !isSlideShow;
    displayImages();
});

window.onload = displayImages; // Display images on page load