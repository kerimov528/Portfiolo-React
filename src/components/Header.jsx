import React from 'react'

function Header() {
    return (
        <div>
                <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <div class="nav__left">
                <img src="./img/logo.png" alt="" class="im-fluid"/>
            </div>
            <button class="navbar-toggler text-danger d-flex d-lg-none align-items-center justify-content-center"
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <i
                    class="navbar-toggler-icon fa-solid fa-bars d-flex d-lg-none align-items-center justify-content-center"></i>
            </button>
            <div class="collapse navbar-collapse nav__middle" id="navbarToggler">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="./Home.html">home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./About.html">about</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./Skills.html">skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./Portfiolo.html">portfiolo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./Contact.html">contact</a>
                    </li>
                    <div class="icons d-none d-lg-flex align-items-center">
                        <a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/feed/"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://www.facebook.com"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
        </div>
    )
}

export default Header