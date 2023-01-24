import Head from "next/head.js";
import React, { useEffect } from "react";
import Navbar from "../components/bcomponents/navbar";
import Footer from "../components/bcomponents/footer";
import Skills from "../components/bcomponents/skills";
import Formation from "../components/bcomponents/formation";
import Projects from "../components/bcomponents/projects";
import Header from "../components/bcomponents/header";
import Why from "../components/bcomponents/why";
import Description from "../components/bcomponents/description";
import Welcome from "../components/bcomponents/welcome";
import Form from "../components/scomponents/form";

import Frontend from "../components/scomponents/frontend";
import Backend from "../components/scomponents/backend";
import Devops from "../components/scomponents/devops";
import Observer from "../components/bcomponents/observer";

export default function Landing() {
	// useEffect(() => {
	// 	const observer = new IntersectionObserver((entries) => {
	// 		entries.forEach((entry) => {
	// 			console.log(entry);
	// 			if (entry.isIntersecting) {
	// 				entry.target.classList.add("show");
	// 			} else {
	// 				entry.target.classList.remove("show");
	// 			}
	// 		});
	// 	});

	// 	const hiddenElements = document.querySelectorAll(".oculto");
	// 	hiddenElements.forEach((el) => observer.observe(el));
	// }, []);

	return (
		<>
			<Observer />
			<Head>
				<title>NevercomeX 💻 </title>
			</Head>
			<Navbar transparent />
			<main className="font-mono">
				<Header />

				<section className="bg-[#131313]">
					<h1 className="text-5xl text-center py-5">WHAT I DO?</h1>
					<Frontend />
					<Backend />
					<Devops />

					{/* <Welcome /> */}
					<Projects />
					{/* <Skills /> */}
					<Formation />
					{/* <Description /> */}
					{/* <Why /> */}
					{/* <Form /> */}
				</section>
			</main>
			<Footer />
		</>
	);
}
