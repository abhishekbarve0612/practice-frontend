// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const openMobileNav = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) mobileNav.classList.add('active');
    const mainNav = document.querySelector('#main-nav');
    if (mainNav) mainNav.classList.add('hide');
}

const closeMobileNav = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) mobileNav.classList.remove('active');
    const mainNav = document.querySelector('#main-nav');
    if (mainNav) mainNav.classList.remove('hide');
}

const openNavBtn = document.querySelector('#open-nav');

if (openNavBtn) openNavBtn.addEventListener('click', openMobileNav);

const closeNavBtn = document.querySelector('#close-nav');

if (closeNavBtn) closeNavBtn.addEventListener('click', closeMobileNav);