// Variables 

const menuBtn = document.querySelector('#menuBtn');
const menu = document.querySelector('#menuList');
const nav = document.querySelector('#nav');
const navLinks = document.querySelectorAll('.menu__link');
let screenWidth = window.matchMedia('(max-width: 700px)');

let windowWidth = window.innerWidth;

// listeners
screenWidth.addListener(hideNav);
menuBtn.addEventListener('click', toggleMenu);

// open/hide menu after click button and change aria-expanded
function toggleMenu() {
	this.blur();
	if(menu.classList.contains('nav__menu--hidden')) {
		openMenu();
	} else {
		closeMenu();
	}
}

function openMenu() {
    menuBtn.setAttribute('aria-expanded', 'true');
    menu.classList.remove('nav__menu--hidden')
}

function closeMenu() {
    menuBtn.setAttribute('aria-expanded', 'false');
    menu.classList.add('nav__menu--hidden') 
}


// hide menu when site open on <700px window width
if(windowWidth < 700) {
    closeMenu();
}

// if window width is <700px then add aria-expanded false and hide menu, else if window width is >700px then remove aria-expadned and show horizontal menu 
function hideNav(e) {
	if(e.matches) {
        navLinks.forEach(link => link.addEventListener('click', closeMenu)) //  close on menu link click 
		nav.classList.add('top-nav--hidden')
		menuBtn.setAttribute('aria-expanded', 'false');
		menu.classList.add('nav__menu--hidden')
	} else {
        navLinks.forEach(link => link.removeEventListener('click', closeMenu)) //  disable menu close on link click 
		nav.classList.remove('top-nav--hidden')
		menuBtn.removeAttribute('aria-expanded');
		menu.classList.remove('nav__menu--hidden')
	}
}





// SCROLL ANIMATIONS 

window.sr = ScrollReveal({reset: true});
sr.reveal('section', {duration: 1000});
sr.reveal('aside', {duration: 1000});
sr.reveal('.clients__quotebox', {duration: 1100});