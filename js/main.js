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
			replaceText('.replace-js', '.replace-contaner-js', 'div', 'support__item-text');
		}
	}
	media2('(max-width: 768px)');

	function media3(width) {
		const mediaQuery = window.matchMedia(width);

		if (mediaQuery.matches) {
			sliderInit('stage-swiper-js', 'stage-wrapper-js', 'stage-slide-js', 'stage-button-prev-js', 'stage-button-next-js', 'stage');
			replaceText('.replace-2-js', '.replace-contaner-2-js', 'li', 'stage__cell-list-item');
			replaceText('.replace-5-js', '.replace-contaner-5-js', 'li', 'stage__cell-list-item');
		}
	}
	media3('(max-width: 991px)');
	// end media query

	// start dinamic remove
	function replaceText(text, container, tag, addClass) {
		const replaceText = document.querySelector(text);

		if (replaceText) {
			const textInn = replaceText.innerHTML;
			const replaceContaner = document.querySelector(container);
			const newElem = document.createElement(tag);
			newElem.classList.add(addClass);

			if (addClass == 'support__item-text') {
				newElem.classList.add('h3-text');
			}

			if (addClass == 'stage__cell-list-item') {
				let getAttr = replaceText.getAttribute('data-num');
				newElem.setAttribute('data-num', getAttr);
			}

			newElem.innerHTML = textInn;
			replaceContaner.append(newElem);
			removeText(text);
		}

		function removeText(replace) {
			const remove = document.querySelector(replace).innerHTML = '';
		}
	}
	//end dinamic remove

	//start slider Swiper////////////////////
	function sliderInit(container, wrapper, slide, btnPrev, btnNext, item) {
		let mySwiper = new Swiper(`.${container}`, {
			containerModifierClass: container, 
			wrapperClass: wrapper,
			slideClass: slide,
			parallax: false,
			loop: false,
			slidesPerView: 'auto',
			spaceBetween: 33,
			freeMode: false,
			centeredSlides: false,
			simulateTouch: true,
			autoHeight: false,
			navigation: {
				nextEl: `.${btnNext}`,
				prevEl: `.${btnPrev}`,
			},
			pagination: {
				el: `.${item}-pagination-js`,
				// type: "bullets",
				clickable: true,
			},
			breakpoints: {
				480: {
					slidesPerView: 1.5,
				},
				768: {
					slidesPerView: 2,
				}
			}
		});
	}
	
	//end slider Swiper////////////////////

});
