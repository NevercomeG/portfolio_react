import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar(props) {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<nav
			className={
				(props.transparent
					? "top-0 fixed  z-50 w-full"
					: "relative shadow-lg bg-white") +
				" flex flex-wrap items-center justify-between px-2 py-3 backdrop-brightness-50  backdrop-blur"
			}
		>
			<div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
				<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<a
						className={
							(props.transparent ? "text-white" : "text-gray-800") +
							" text-xl  font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
						}
					>
						<Link href="/page2" passHref>
							LUIS CUEVA<span className="box_1 ">S</span>
						</Link>
					</a>
					<button
						className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<i
							className={
								(props.transparent ? "text-white" : "text-gray-800") +
								" fas fa-bars"
							}
						></i>
					</button>
				</div>
				<div
					className={
						"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
						(navbarOpen ? " block rounded shadow-lg" : " hidden")
					}
					id="example-navbar-warning"
				>
					<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
						<li className="flex items-center">
							<a
								className={
									(props.transparent
										? "lg:text-white lg:hover:text-gray-300 text-gray-800"
										: "text-gray-800 hover:text-gray-600") +
									" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
								}
								href="https://www.linkedin.com/in/luis-solano-a20683208/"
							>
								<i
									className={
										(props.transparent
											? "lg:text-gray-300 text-gray-500"
											: "text-gray-500") +
										" fab fa-linkedin text-xl leading-lg "
									}
								/>
								<span className="lg:hidden inline-block ml-2">Linkedin</span>
							</a>
						</li>

						<li className="flex items-center">
							<a
								className={
									(props.transparent
										? "lg:text-white lg:hover:text-gray-300 text-gray-800"
										: "text-gray-800 hover:text-gray-600") +
									" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
								}
								href="#"
							>
								<i
									className={
										(props.transparent
											? "lg:text-gray-300 text-gray-500"
											: "text-gray-500") +
										" fab fa-instagram text-xl leading-lg "
									}
								/>
								<span className="lg:hidden inline-block ml-2">Instagram</span>
							</a>
						</li>
						<li className="flex items-center">
							<a
								className={
									(props.transparent
										? "lg:text-white lg:hover:text-gray-300 text-gray-800"
										: "text-gray-800 hover:text-gray-600") +
									" px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
								}
								href="https://github.com/NevercomeX"
							>
								<i
									className={
										(props.transparent
											? "lg:text-gray-300 text-gray-500"
											: "text-gray-500") + " fab fa-github text-xl leading-lg "
									}
								/>
								<span className="lg:hidden inline-block ml-2">Github</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
