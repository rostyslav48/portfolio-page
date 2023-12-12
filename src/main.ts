const addAnimation = (element: Element, animation: string) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(
			(entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(animation);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.5 },
		);
	});

	observer.observe(element);
};

const elementsFromRight = document.querySelectorAll('.right-fold');
const elementsFromLeft = document.querySelectorAll('.left-fold');

elementsFromRight.forEach((element) => {
	addAnimation(element, 'fold-from-right');
});

elementsFromLeft.forEach((element) => {
	addAnimation(element, 'fold-from-left');
});

const popElements = document.querySelectorAll('.pop-appear');
popElements.forEach((element) => {
	addAnimation(element, 'pop-appearing');
});
