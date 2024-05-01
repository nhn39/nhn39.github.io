document.addEventListener('DOMContentLoaded', function () {
    const videos = [
        'https://www.youtube.com/embed/4r0pqT2uqMA',
        'https://www.youtube.com/embed/bdx7irsaNAM',
        'https://www.youtube.com/embed/-8oj_9gOV5k',
        'https://www.youtube.com/embed/A4NXo6N03v4',

    ];

    const gallery = document.getElementById('videoGallery');
    gallery.className = 'grid';  // Reuse the grid class for styling

    videos.forEach(videoUrl => {
        const videoElement = document.createElement('iframe');
        videoElement.src = videoUrl;
        videoElement.width = "560";
        videoElement.height = "315";
        videoElement.frameBorder = "0";
        videoElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        videoElement.allowFullscreen = true;
        videoElement.className = 'grid-item';  // Use grid-item for consistent styling
        gallery.appendChild(videoElement);
    });
});
