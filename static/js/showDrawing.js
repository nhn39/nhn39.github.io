const images = [
    'static/img/1.JPG',
    'static/img/2.JPG',
    'static/img/3.JPG',
    'static/img/4.JPG',
    'static/img/5.JPEG',
    'static/img/6.JPEG',
    'static/img/7.JPG',
    'static/img/8.JPEG',
    'static/img/9.JPEG',
    'static/img/10.JPEG',
    'static/img/11.JPEG',
    'static/img/12.JPEG',



];

let isSlideShow = false; // Toggle state

function displayImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';  // Clear the gallery content

    if (isSlideShow) {
        // Main display for the large image
        const mainImageDisplay = document.createElement('img');
        mainImageDisplay.src = images[0];
        mainImageDisplay.className = 'main-image';
        gallery.appendChild(mainImageDisplay);

        // Container for thumbnails
        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.className = 'thumbnail-container';

        // images.forEach((img, index) => {
        //     const thumbnail = document.createElement('img');
        //     thumbnail.src = img;
        //     thumbnail.className = 'thumbnail';
        //     thumbnail.addEventListener('click', () => {
        //         mainImageDisplay.src = img; // Change the main image when thumbnail is clicked
        //     });
        //     thumbnailContainer.appendChild(thumbnail);
        // });
        
        images.forEach((img, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = img;
            thumbnail.className = 'thumbnail';
            thumbnail.style.width = '100px';
            thumbnail.style.height = '75px';
            thumbnail.style.objectFit = 'cover';
            thumbnail.style.marginRight = '5px';
            thumbnail.addEventListener('click', () => {
                mainImageDisplay.src = img; // Change the main image when thumbnail is clicked
                currentSlide = index; // Update current slide
            });
            thumbnailContainer.appendChild(thumbnail);
        });

        gallery.appendChild(thumbnailContainer);
        enableSlideshowControls(mainImageDisplay, images); // Assuming you modify this function
    } else {
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

function enableSlideshowControls(mainImage, images) {
    let currentSlide = 0;
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % images.length;
        mainImage.src = images[currentSlide];
    };
    mainImage.addEventListener('click', nextSlide);
}


document.getElementById('toggleView').addEventListener('click', () => {
    isSlideShow = !isSlideShow;
    displayImages();
});

window.onload = displayImages; // Display images on page load