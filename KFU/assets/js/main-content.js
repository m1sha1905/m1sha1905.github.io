const leftArrowPartner = document.querySelector('.arrow-left-partner');
const rightArrowPartner = document.querySelector('.arrow-right-partner');
const partnersContainer = document.querySelector('.partners-container');

const scrollStepPartner = 278;

rightArrowPartner.addEventListener('click', () => {
    partnersContainer.scrollBy({
        top: 0,
        left: scrollStepPartner,
        behavior: 'smooth'
    });
});

leftArrowPartner.addEventListener('click', () => {
    partnersContainer.scrollBy({
        top: 0,
        left: -scrollStepPartner,
        behavior: 'smooth'
    });
});

const leftArrowNews = document.querySelector('.arrow-left-news');
const rightArrowNews = document.querySelector('.arrow-right-news');
const newsContainer = document.querySelector('.news-container');


let scrollAmountNews = newsContainer.scrollLeft;
const scrollStepNews = 661 + 20;

rightArrowNews.addEventListener('click', () => {
    scrollAmountNews += scrollStepNews;
    newsContainer.scrollTo({
        top: 0,
        left: scrollAmountNews,
        behavior: 'smooth'
    });
});

leftArrowNews.addEventListener('click', () => {
    scrollAmountNews -= scrollStepNews;
    newsContainer.scrollTo({
        top: 0,
        left: scrollAmountNews,
        behavior: 'smooth'
    });
});

document.getElementById('scroll-to-services').addEventListener('click', function () {
    const servicesSection = document.querySelector('.services-container');

    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

const categoryButtons = document.querySelectorAll('.category');


categoryButtons.forEach(button => {
    button.addEventListener('click', () => {

        categoryButtons.forEach(btn => btn.classList.remove('active'));


        button.classList.add('active');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category");
    const partnerCardsContainer = document.querySelector(".partners-container");
    const partnerCards = Array.from(document.querySelectorAll(".partner-card"));

    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {

            categoryButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-category");

            const sortedCards = partnerCards.sort((a, b) => {
                const isASelected = a.getAttribute("data-category") === selectedCategory;
                const isBSelected = b.getAttribute("data-category") === selectedCategory;
                return isBSelected - isASelected;
            });


            partnerCardsContainer.innerHTML = '';
            sortedCards.forEach(card => partnerCardsContainer.appendChild(card));
        });
    });
});
