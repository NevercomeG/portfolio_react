import React, { useEffect } from "react";
import { FC } from "react";
import "intersection-observer";

interface IntersectionObserverEntry {
	isIntersecting: boolean;
	target: Element;
}

const Observer: FC = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach((entry) => {
					console.log(entry);
					if (entry.isIntersecting) {
						entry.target.classList.add("show");
					} else {
					}
				});
			}
		);

		const hiddenElements = document.querySelectorAll(".oculto");
		hiddenElements.forEach((el: Element) => observer.observe(el));
	}, []);
	return null;
};

export default Observer;
