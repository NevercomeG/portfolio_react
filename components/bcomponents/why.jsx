import React from "react";
import Image from "next/image";

const Why = () => {
	return (
		<section className="pt-20 pb-20 relative block bg-gray-900">
			<div
				className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
				style={{ height: "80px" }}
			></div>

			<div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
				<div className="flex flex-wrap text-center justify-center">
					<div className="w-full lg:w-6/12 px-4">
						<h2 className="text-4xl font-semibold text-white">
							Why you should work with me
						</h2>
						<p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
							Provide potential clients and employers with a more comprehensive
							overview of the developers experience and capabilities.
						</p>
					</div>
				</div>
				<div className="flex flex-wrap mt-12 justify-center">
					<div className="w-full lg:w-3/12 px-4 text-center">
						<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
							<i className="fas fa-medal text-xl"></i>
						</div>
						<h6 className="text-xl mt-5 font-semibold text-white">
							Hiring me as a full-stack developer
						</h6>
						<p className="mt-2 mb-4 text-gray-500">
							Allows you to benefit from my expertise in both front-end and
							back-end technologies, ensuring that your web development projects
							are completed with a holistic and comprehensive approach.
						</p>
					</div>
					<div className="w-full lg:w-3/12 px-4 text-center">
						<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
							<i className="fas fa-lightbulb text-xl"></i>
						</div>
						<h5 className="text-xl mt-5 font-semibold text-white">
							My experience
						</h5>
						<p className="mt-2 mb-4 text-gray-500">
							Working on a range of web development projects allows me to bring
							a wealth of knowledge and expertise to your project, helping to
							ensure that it is delivered on time and within budget.
						</p>
					</div>
					<div className="w-full lg:w-3/12 px-4 text-center">
						<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
							<i className="fas fa-poll text-xl"></i>
						</div>
						<h5 className="text-xl mt-5 font-semibold text-white">
							As a proactive problem-solver
						</h5>
						<p className="mt-2 mb-4 text-gray-500">
							I enjoy collaborating with teams to find creative solutions to
							technical challenges, helping to ensure that your web development
							project runs smoothly and efficiently.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Why;
