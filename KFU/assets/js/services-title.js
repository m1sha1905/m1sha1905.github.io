document.addEventListener("DOMContentLoaded", function () {
    function reorderServiceContent() {
        const serviceContent = document.querySelector(".service-content");
        const serviceTitle = document.querySelector(".service-title");
        const serviceImage = document.querySelector(".service-image");
        const serviceItem = document.querySelector(".service-item");

        if (window.innerWidth <= 768) {
            serviceContent.insertBefore(serviceTitle, serviceContent.firstChild);

            serviceContent.insertBefore(serviceImage, serviceTitle.nextSibling);

            serviceContent.appendChild(serviceItem);
        }
    }

    reorderServiceContent();
    window.addEventListener("resize", reorderServiceContent);
});

