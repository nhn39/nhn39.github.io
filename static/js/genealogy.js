document.addEventListener("DOMContentLoaded", function () {
  const topRow = document.getElementById("topRow");
  const bottomRow = document.getElementById("bottomRow");

  const videoModal = document.getElementById("videoModal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const videoContainer = document.getElementById("videoContainer");

  const categoriesTop = [
    {
      title: "Music",
      link: "music.html",
      items: [
        { text: "performing", type: "link", href: "recordings.html" },
        { text: "Classical", type: "text" },
        {
          text: "Romantic",
          type: "video",
          videoType: "local",
          src: "./static/vid/chopin_mixing_mastering_remap_2_1.mp4",
        },
        { text: "impressionistic", type: "text" },
        { text: "Jazz", type: "text" },
        { text: "Electronic", type: "text" },
        { text: "film-music", type: "text" },
        { text: "pop", type: "text" },
        {
          text: "soundtrack",
          type: "video",
          videoType: "local",
          src: "./static/vid/shingeki_no_kyojin_mixing_mastering_6.mp4",
        },
      ],
    },
    {
      title: "Filmmaking / Videomaking",
      link: "filmmaking.html",
      items: [
        { text: "Documentary", type: "text" },
        {
          text: "Short Films",
          type: "video",
          videoType: "local",
          src: "./static/vid/recital_application_form_8.mp4",
        },
        { text: "Anime", type: "text" },
        { text: "stop-motion", type: "text" },
        {
          text: "vfx",
          type: "video",
          videoType: "local",
          src: "./static/vid/duel_basement_re_2.mp4",
        },
        {
          text: "Music Performance",
          type: "link",
          href: "music-performance.html",
        },
        {
          text: "Cinematic",
          type: "video",
          videoType: "local",
          src: "./static/vid/bach_piano_world.mp4",
        },
        {
          text: "Culinary",
          type: "video",
          videoType: "local",
          src: "./static/vid/chicken.mp4",
        },
        {
          text: "drawing",
          type: "video",
          videoType: "local",
          src: "./static/vid/rachmaninoff_chalk.mp4",
        },
        {
          text: "motion graphics",
          type: "video",
          videoType: "local",
          src: "./static/vid/music_notation_1.mp4",
        },
        { text: "lecture", type: "link", href: "lecture.html" },
        {
          text: "dancing",
          type: "video",
          videoType: "local",
          src: "./static/vid/countdown_to_class_7.mp4",
        },
      ],
    },
    {
      title: "Visual Art",
      link: "visual-art.html",
      items: [
        { text: "Drawing", type: "link", href: "drawings.html" },
        { text: "Painting", type: "text" },
        {
          text: "3D modeling",
          type: "video",
          videoType: "drive",
          src: "https://drive.google.com/file/d/1kKD0LIAJ_6YH0fnDjkmb-4yXk7ucJG6X/preview",
        },
        { text: "Terrarium", type: "text" },
        { text: "sculpting", type: "text" },
        { text: "diorama", type: "text" },
      ],
    },
  ];

  const categoriesBottom = [
    {
      title: "Technology",
      link: "technology.html",
      items: [
        { text: "Programming", type: "text" },
        { text: "AI Tools", type: "text" },
        { text: "Robotics", type: "text" },
        { text: "electronics", type: "text" },
      ],
    },
    {
      title: "Culinary",
      link: "story-worlds.html",
      items: [
        { text: "cooking", type: "text" },
        { text: "plating", type: "text" },
        { text: "dessert", type: "text" },
      ],
    },
  ];

  function createCategory(categoryData) {
    const category = document.createElement("div");
    category.className = "category";

    const title = document.createElement("a");
    title.href = categoryData.link;
    title.className = "title";
    title.textContent = categoryData.title;
    category.appendChild(title);

    const tagCloud = document.createElement("div");
    tagCloud.className = "tag-cloud";

    categoryData.items.forEach((item) => {
      let element;

      if (item.type === "link") {
        element = document.createElement("a");
        element.href = item.href;
        element.className = "tag";
        element.textContent = item.text;
      } else if (item.type === "video") {
        element = document.createElement("button");
        element.className = "tag video-tag";
        element.textContent = item.text;
        element.dataset.src = item.src;
        element.dataset.videoType = item.videoType;
        element.dataset.title = item.text;
      } else {
        element = document.createElement("span");
        element.className = "tag-text";
        element.textContent = item.text;
      }

      tagCloud.appendChild(element);
    });

    category.appendChild(tagCloud);
    return category;
  }

  function openVideoModal(title, src, videoType) {
    modalTitle.textContent = title;
    videoContainer.innerHTML = "";

    if (videoType === "youtube" || videoType === "drive") {
      const iframe = document.createElement("iframe");
      iframe.src = src;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.frameBorder = "0";
      videoContainer.appendChild(iframe);
    } else {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      videoContainer.appendChild(video);
    }

    videoModal.classList.remove("hidden");
  }

  function closeVideoModal() {
    videoModal.classList.add("hidden");
    videoContainer.innerHTML = "";
  }

  categoriesTop.forEach((category) => {
    topRow.appendChild(createCategory(category));
  });

  categoriesBottom.forEach((category) => {
    bottomRow.appendChild(createCategory(category));
  });

  document.querySelectorAll(".video-tag").forEach((tag) => {
    tag.addEventListener("click", function () {
      openVideoModal(tag.dataset.title, tag.dataset.src, tag.dataset.videoType);
    });
  });

  closeModal.addEventListener("click", closeVideoModal);

  videoModal.addEventListener("click", function (event) {
    if (event.target === videoModal) {
      closeVideoModal();
    }
  });
});
