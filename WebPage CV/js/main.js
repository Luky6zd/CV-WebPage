/* MENU SHOW / HIDDEN */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* MENU SHOW */
/* VALIDATE IF CONSTANT EXISTS */
if (navToggle) {
    navToggle.addEventListener('click', () => { navMenu.classList.add('show-menu') })
};

/* MENU HIDDEN */
/* VALIDATE IF CONSTANT EXISTS */
if (navClose) {
    navClose.addEventListener('click', () => { navMenu.classList.remove('show-menu') })
};

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/* SKILLS */
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
};

skillsHeader.forEach((el) => { el.addEventListener('click', toggleSkills) });

/* QUALIFICATION TABS */
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })

        target.classList.add('qualification__active');

        tab.forEach(tab => {
            tab.classList.remove('qualification__active');
        })

        tab.classList.add('qualification__active');
    })
})

/* SERVICES MODAL (Active Modal) */
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})

/* PORTFOLIO SWIPER */
let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/* DARK/LIGHT THEME */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// selected item
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain current theme by validating dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
    // if validation is true, we activate or deactivate dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// manually activate/deactivate dark theme
themeButton.addEventListener('click', () => {
    // add/remove dark theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // we save theme and icon user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected.icon', getCurrentIcon());
})
