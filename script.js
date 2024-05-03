document.addEventListener("DOMContentLoaded", function () {
	const elements = document.querySelectorAll(".animate__animated");

	if (elements.length > 0) {
		// Function to add animation class when element enters viewport
		const animateOnScroll = (entries, observer) => {
			entries.forEach((entry) => {
				console.log(entry);
				if (entry.isIntersecting) {
					entry.target.classList.add("animate__fadeIn");
					observer.unobserve(entry.target);
				}
			});
		};

		// Create an Intersection Observer for each element
		elements.forEach((element) => {
			const observer = new IntersectionObserver(animateOnScroll, {
				threshold: 0.5,
			});
			observer.observe(element);
		});
	} else {
		console.error("No elements with the 'animate__animated' class found.");
	}
});
