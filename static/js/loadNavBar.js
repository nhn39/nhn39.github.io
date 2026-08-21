document.addEventListener("DOMContentLoaded", function () {
  const navbar = `
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="index.html">
    <img src="static/img/nam_logo_1.png" alt="Nam Nguyen Home" class="navbar-logo">
</a>
<button
        class="navbar-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded="false"
    >
        ☰
    </button>


            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="projects.html">Projects</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="drawings.html">My Drawings</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="recordings.html">My recordings</a>
                </li>
                <li class="nav-item"> 
                <a class="nav-link" href="metronome.html">Metronome</a>
                </li>
                <li class="nav-item"> 
                <a class="nav-link" href="Foucault’s concept of genealogy.html">Foucault</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
            </ul>
    </nav>`;
  document.body.insertAdjacentHTML("afterbegin", navbar);

  const toggle = document.querySelector(".navbar-toggle");
  const navItems = document.querySelector(".navbar-nav");   

//   toggle.addEventListener("click", function () {
//     navItems.classList.toggle("show");
//   });

const menuOpen =sessionStorage.getItem("menuOpen") === "true";
if (menuOpen) {
  navItems.classList.add("show");
  toggle.setAttribute("aria-expanded", "true");
} else {
  navItems.classList.remove("show");
  toggle.setAttribute("aria-expanded", "false");   
}

toggle.addEventListener("click", function () {
  navItems.classList.toggle("show");
  const isOpen = navItems.classList.contains("show");
  sessionStorage.setItem("menuOpen" , isOpen);
  toggle.setAttribute("aria-expanded", isOpen)

});
document.addEventListener("click", function (event) {
    const navbarElement = document.querySelector(".navbar");
 const clickedCarouselControl =
    event.target.closest(".intro-prev") ||
    event.target.closest(".intro-next") ||
    event.target.closest(".intro-dot");    
    if (
        navItems.classList.contains("show") &&
        !navbarElement.contains(event.target) &&
        !clickedCarouselControl
    ) {
            navItems.classList.remove("show");
            toggle.setAttribute("aria-expanded", "false");  
            sessionStorage.setItem("menuOpen", "false");
        }
});
});