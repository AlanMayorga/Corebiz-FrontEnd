/*window.addEventListener("load", function (event) {

    console.log("HOLA APP");

    const buttonNext = document.querySelector('.carousel__next');
    const buttonBack = document.querySelector('.carousel__back');
    const list = document.querySelector('.carousel_list');

    let leftInit = 0;

    buttonNext.addEventListener('click', e => {
        console.log("click");
        list.scroll({
            top: 0,
            left: (leftInit += 180),
            behavior: 'smooth'
        });
    });

    buttonBack.addEventListener('click', e => {
        console.log("click");
        list.scroll({
            top: 0,
            left: (leftInit -= 180),
            behavior: 'smooth'
        });
    });
});*/

window.addEventListener('load', function () {
    new Splide('.splide', {
        perPage: 4,
        pagination: false,
        breakpoints: {
            1200: {
                perPage: 3,
            },
            980: {
                perPage: 2,
                arrows: false,
                pagination: true,
                padding: {
                    left : 0,
                    right: 0,
                },
            },
            690: {

            }
        }
    }).mount();
});