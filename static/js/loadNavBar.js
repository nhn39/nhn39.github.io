document.addEventListener("DOMContentLoaded", function () {
  const navbar = `
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="index.html">
    <img src="static/img/nam_logo.png" alt="Nam Nguyen Home" class="navbar-logo">
</a>
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
});
