const MENU = document.getElementById('menu');
const ARROW_NEXT = document.getElementById('arrows_next');
const ARROW_PREV = document.getElementById('arrows_prev');
const SLIDES = document.querySelectorAll('.slider__content');
const SLIDER = document.getElementById('slider');
const SLIDER_WRAPPER = document.getElementById('wrapper__slider');
const PORTFOLIO_ITEM = document.querySelectorAll('.portfolio__item');
const PHONE_VERT_SHADOW = document.querySelector('#phone__vertical-shadow');
const PHONE_HORIZ_SHADOW = document.querySelector('#phone__horizontal-shadow');
const PHONE_VERT = document.getElementById('phone__vertical');
const PHONE_HORIZ = document.getElementById('phone__horizontal');
const PORTFOLIO = document.querySelector('.portfolio__tags');


 
//  FORM 
const EMAIL = document.getElementById('email');
const NAME = document.getElementById('name');
const SUBJECT = document.getElementById('subject');
const DETAILS = document.getElementById('details');
const SUBMIT = document.getElementById('submit');

const MODAL = document.querySelector('.wrapper_modal');
const THEME = document.getElementById('topic');
const DESCR = document.getElementById('description');
const BUTTON_OK = document.getElementById('btn');

// PORTFOLIO

const PORTFOLIO_ITEMS = document.querySelectorAll('#portfolio__items');
const PORTFOLIO_MENU_TAGS = document.querySelector('#portfolio__tags');
const PORTFOLIO_TAGS = document.querySelectorAll('.tag');


const BURGER = document.getElementById('burger');
const NAV = document.getElementById('nav');
let c = true;
BURGER.addEventListener('click', function (event) {
    console.log(event.target);
     
    if(c){

     BURGER.classList.remove('burger-active');
     NAV.classList.remove('header__navigation-active');
     c = false;
    }else {

        document.getElementById('burger').classList.add('burger-active');
        NAV.classList.add('header__navigation-active');
        c = true;
    }
     

})

// ITEMS FROM TAGS
PORTFOLIO_MENU_TAGS.addEventListener('click', function(e) {
    let val = e.target;
    if (val && val.classList.contains('tag')) {

        for (let i = 0; i < PORTFOLIO_TAGS.length; i++) {

            if (val == PORTFOLIO_TAGS[i]) {

                PORTFOLIO_ITEMS[i].classList.remove('hide');

            } else {

                PORTFOLIO_ITEMS[i].classList.add('hide');
            }
        }
    }
});

// PORTFOLIO TAGS

PORTFOLIO_TAGS.forEach(el => {
    el.addEventListener('click', () => {
        PORTFOLIO_TAGS.forEach(element => {
            element.classList.remove('tag_selected');
        });
        el.classList.add('tag_selected');


    });
});

// HEADER
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation_list__link-active'));
    event.target.classList.add('navigation_list__link-active');

});

// SLIDER
let numberOfSildes = 1;


ARROW_NEXT.addEventListener('click', () => {
    numberOfSildes++;

    if (numberOfSildes > SLIDES.length) {
        numberOfSildes = 1;
    }


    SLIDES.forEach((el) => {
        el.style.display = 'none';
    });
    SLIDES[numberOfSildes - 1].style.display = 'flex';
    SLIDER.classList.toggle('slide-2');

})


ARROW_PREV.addEventListener('click', () => {
    numberOfSildes--;

    if (numberOfSildes < 1) {
        numberOfSildes = SLIDES.length;
    }

    SLIDES.forEach((el) => {
        el.style.display = 'none';
    });
    SLIDES[numberOfSildes - 1].style.display = 'flex';



    SLIDER.classList.toggle('slide-2');

});

// Activate mobile phones
let a = true;
PHONE_VERT.addEventListener('click', () => {
    if (a) {

        PHONE_VERT_SHADOW.style.display = "block";
        a = false;

    } else {

        PHONE_VERT_SHADOW.style.display = "none";
        a = true;

    }
});

let b = true;
PHONE_HORIZ.addEventListener('click', () => {
    if (b) {

        PHONE_HORIZ_SHADOW.style.display = "block";
        b = false;

    } else {

        PHONE_HORIZ_SHADOW.style.display = "none";
        b = true;

    }
});


// BORDERED PORTFOLIO ITEMS
PORTFOLIO_ITEM.forEach(el => {
    el.addEventListener('click', () => {

        PORTFOLIO_ITEM.forEach(element => {
            element.classList.remove('portfolio__item-active');
        });

        el.classList.add('portfolio__item-active');

    });
});

// MODAL
SUBMIT.addEventListener('click', element => {
    element.preventDefault();
    if (EMAIL.value !== '' && NAME.value !== '') {
        if (SUBJECT.value !== '') {
            THEME.textContent = 'Тема: ' + SUBJECT.value;
        }
        if (DETAILS.value !== '') {
            DESCR.textContent = 'Описание: ' + DETAILS.value;
        }
        MODAL.style.display = 'block';

    }
})

BUTTON_OK.addEventListener('click', el => {
    MODAL.style.display = 'none';
    SUBJECT.value = '';
    DETAILS.value = '';
    EMAIL.value = '';
    NAME.value = '';
    THEME.textContent = 'Без темы';
    DESCR.textContent = 'Без описания';

})

MODAL.addEventListener('click', el => {
    if (el.target.classList.contains('wrapper_modal')) {
        MODAL.style.display = 'none';
        SUBJECT.value = '';
        DETAILS.value = '';
        EMAIL.value = '';
        NAME.value = '';
        THEME.value = 'Без темы';
        DESCR.value = 'Без описания';

    }


})