document.addEventListener("DOMContentLoaded", function () {
    function reorderElements() {
        const content = document.querySelector(".news-title-content");
        const titleText = document.querySelector(".news-title-text h1");
        const mainImage = document.querySelector(".news-title-image");
        const additionalImage = document.querySelector(".news-additional-image");
        const mainText = document.querySelector(".news-title-text");


        if (window.innerWidth <= 768) {
            content.insertBefore(titleText, content.firstChild);

            content.insertBefore(mainImage, titleText.nextSibling);

            content.insertBefore(mainText, mainImage.nextSibling);

            content.appendChild(additionalImage);
        } else {
            content.appendChild(mainImage);
            content.appendChild(mainText);
        }
    }

    reorderElements();
    window.addEventListener("resize", reorderElements);
});

