'use strict';
document.addEventListener('DOMContentLoaded', () => {

	//start smooth scroll
	function scrollToBlock() {
		const scrollTo = document.querySelectorAll('a.scroll-to-js');

		if (scrollTo) {
				scrollTo.forEach(link => {

				link.addEventListener('click', function(e) {
					e.preventDefault();

					let href = this.getAttribute('href').substring(1);

					const scrollTarget = document.getElementById(href);

					const topOffset = 0;

					const elementPosition = scrollTarget.getBoundingClientRect().top;
					const offsetPosition = elementPosition - topOffset;

					window.scrollBy({
						top: offsetPosition,
						behavior: 'smooth'
					});
				});
			});
		}
	}
	scrollToBlock();
	//end smooth scroll
	// start change src
	function changeSrc(findClass, src) {
		const findSrc = document.querySelectorAll(findClass);

		if (findSrc) {
			findSrc.forEach(item => {
				let findAttr = item.getAttribute(src);
				let removeAttr = item.removeAttribute(src);
				let setAttr = item.setAttribute(src, findAttr.replace(".", "-mob."));
			});
		}
	}
	
	// end change src
	// start media query
	function media(width) {
		const mediaQuery = window.matchMedia(width);

		if (mediaQuery.matches) {
			changeSrc('.add-src-js', 'src');
			changeSrc('.add-srcset-js', 'srcset');
		}
	}
	media('(max-width: 767px)');

	function media2(width) {
		const mediaQuery = window.matchMedia(width);

		if (mediaQuery.matches) {
			replaceText('.replace-js', '.replace-contaner-js', 'div', 'support__item-text', 'head-text');
		}
	}
	media2('(max-width: 768px)');
	// end media query

	// start dinamic remove
	function replaceText(text, container, tag, addClass, addMoreClass) {
		const replaceText = document.querySelector(text);

		if (replaceText) {
			const textInn = replaceText.innerHTML;
			const replaceContaner = document.querySelector(container);
			const newElem = document.createElement(tag);
			newElem.classList.add(addClass, addMoreClass);
			newElem.innerHTML = textInn;
			replaceContaner.append(newElem);
			removeText(text);
		}
	}

	function removeText(replace) {
		const remove = document.querySelector(replace).innerHTML = '';
	}
	//end dinamic remove

	//start slider Swiper////////////////////
	let mySwipeRealIndex;
		let mySwiper = new Swiper('.feedback__container', {
			containerModifierClass: 'feedback__container', 
			wrapperClass: 'feedback__wrapper',
			slideClass: 'feedback__item',
			parallax: false,
			loop: false,
			slidesPerView: 'auto',
			spaceBetween: 30,
			freeMode: false,
			centeredSlides: true,
			simulateTouch: true,
			autoHeight: false,
			navigation: {
				nextEl: '.feedback__button-next',
				prevEl: '.feedback__button-prev',
			},
		});
	//end slider Swiper////////////////////

});
