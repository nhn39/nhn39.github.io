document.addEventListener("DOMContentLoaded", function() {
    const navbar = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="index.html">Nam Nguyen</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
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
        </div>
    </nav>`;
    document.body.insertAdjacentHTML('afterbegin', navbar);
});
