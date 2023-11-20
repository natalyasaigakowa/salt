$(document).ready(function(){
    $('.carousel').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    }
    );
});

const resultValueField = document.querySelector('.amount__result');
const inputAmount = document.querySelector('.amount__slider');


inputAmount.addEventListener('input', () => {
    resultValueField.textContent = inputAmount.value;
});


const resultValueTerm = document.querySelector('.term__result');
const inputTerm = document.querySelector('.term__slider');


inputTerm.addEventListener('input', () => {
    resultValueTerm.textContent = inputTerm.value;
});



