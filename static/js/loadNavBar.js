document.addEventListener("DOMContentLoaded", function() {
    const navbar = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="index.html">Nam Nguyen</a>
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
                    <a class="nav-link" href="contact.html">Contact</a>
                </li>
        </ul>
    </nav>`;
    document.body.insertAdjacentHTML('afterbegin', navbar);
});
