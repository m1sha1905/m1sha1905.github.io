document.addEventListener('DOMContentLoaded', () => {

    const scrollQualificationContainer = document.querySelector('.qualification-cards');
    const qualificationArrowLeft = document.querySelector('.arrow-left-qualification');
    const qualificationArrowRight = document.querySelector('.arrow-right-qualification');

    const qualificationCardWidth = 355;

    qualificationArrowLeft.addEventListener('click', () => {
        scrollQualificationContainer.scrollBy({
            left: -qualificationCardWidth,
            behavior: 'smooth'
        });
    });


    qualificationArrowRight.addEventListener('click', () => {
        scrollQualificationContainer.scrollBy({
            left: qualificationCardWidth,
            behavior: 'smooth'
        });
    });


    const scrollDocumentsContainer = document.querySelector('.documents-container');
    const documentsArrowLeft = document.querySelector('.arrow-left-documents');
    const documentsArrowRight = document.querySelector('.arrow-right-documents');

    const documentsCardWidth = 350;

    documentsArrowLeft.addEventListener('click', () => {
        scrollDocumentsContainer.scrollBy({
            left: -documentsCardWidth,
            behavior: 'smooth'
        });
    });


    documentsArrowRight.addEventListener('click', () => {
        scrollDocumentsContainer.scrollBy({
            left: documentsCardWidth,
            behavior: 'smooth'
        });
    });
});

