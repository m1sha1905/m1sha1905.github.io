const modal = document.getElementById('mobile-nav-modal');
const openBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('close-modal');


openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


document.getElementById('close-popup-btn').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'none';
});


window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const servicesLink = document.querySelector("#services-link");
    const projectsLink = document.querySelector("#projects-link");
    const servicesSubmenu = document.getElementById("services-submenu");
    const projectsSubmenu = document.getElementById("projects-submenu");

    let servicesTimeout, projectsTimeout;


    function showSubmenu(submenu) {
        submenu.style.display = "grid";
    }


    function hideSubmenu(submenu) {
        submenu.style.display = "none";
    }


    servicesLink.addEventListener("mouseover", function () {
        clearTimeout(servicesTimeout);
        showSubmenu(servicesSubmenu);
    });


    servicesLink.addEventListener("mouseleave", function () {
        servicesTimeout = setTimeout(() => hideSubmenu(servicesSubmenu), 200)
    });


    servicesSubmenu.addEventListener("mouseover", function () {
        clearTimeout(servicesTimeout);
    });


    servicesSubmenu.addEventListener("mouseleave", function () {
        servicesTimeout = setTimeout(() => hideSubmenu(servicesSubmenu), 200)
    });


    projectsLink.addEventListener("mouseover", function () {
        clearTimeout(projectsTimeout);
        showSubmenu(projectsSubmenu);
    });

    projectsLink.addEventListener("mouseleave", function () {
        projectsTimeout = setTimeout(() => hideSubmenu(projectsSubmenu), 200)
    });

    projectsSubmenu.addEventListener("mouseover", function () {
        clearTimeout(projectsTimeout);
    });

    projectsSubmenu.addEventListener("mouseleave", function () {
        projectsTimeout = setTimeout(() => hideSubmenu(projectsSubmenu), 200)
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("close-popup-btn");
    const headerButton = document.getElementById("leave-request");
    const scrollToContactButton = document.getElementById("scroll-to-contact");

    function openPopup() {
        popup.style.display = "flex";
    }

    function closePopup() {
        popup.style.display = "none";
    }

    if (headerButton) {
        headerButton.addEventListener("click", openPopup);
    }

    if (scrollToContactButton) {
        scrollToContactButton.addEventListener("click", openPopup);
    }

    if (closePopupBtn) {
        closePopupBtn.addEventListener("click", closePopup);
    }
});
