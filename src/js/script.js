const menuBtn = document.querySelector('#menuBtn');
const menu = document.querySelector('#menuList');
const nav = document.querySelector('#nav');

let screenWidth = window.matchMedia('(max-width: 700px)');





screenWidth.addListener(hideNav);
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {

	if(menu.classList.contains('nav__menu--hidden')) {
		menuBtn.setAttribute('aria-expanded', 'true');
		menu.classList.remove('nav__menu--hidden')
	} else {
		menuBtn.setAttribute('aria-expanded', 'false');
		menu.classList.add('nav__menu--hidden')
	}
	

}


function hideNav(e) {
	if(e.matches) {
		nav.classList.add('top-nav--hidden')
		menuBtn.setAttribute('aria-expanded', 'false');
		menu.classList.add('nav__menu--hidden')
	} else {
		nav.classList.remove('top-nav--hidden')
		menuBtn.removeAttribute('aria-expanded');
		menu.classList.remove('nav__menu--hidden')
	}
}