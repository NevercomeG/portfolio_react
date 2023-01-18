import React from "react";
import Image from "next/image";

export default function Devops() {
	return (
		<section className="relative block py-10  ">
			<div className="flex lg:grid lg:grid-flow-col flex-col-reverse  items-center justify-center ">
				<div className="">
					<Image src="/assets/img/vercel.svg" width={500} height={500} alt="" />
				</div>
				<div className="lg:pl-44 m-4">
					<h1 className="text-[50px] font-bold text-white font-mono ">
						DevOps
					</h1>
					<div className="py-6 space-y-6">
						<div className="grid grid-cols-4 lg:flex lg:flex-row lg:space-x-2 space-">
							<div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
									width={50}
									height={50}
									alt=""
								/>
							</div>
							<div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"
									width={50}
									height={50}
									alt=""
								/>
							</div>
							<div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
									width={50}
									height={50}
									alt=""
								/>
							</div>
							<div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white">
								<Image
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
									width={50}
									height={50}
									alt=""
								/>
							</div>
							<div className="py-2 lg:py-0">
								<div className="h-[75px] w-[75px] rounded-lg grid flex-col items-center justify-center bg-white text-white ">
									<Image
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg"
										width={50}
										height={50}
										alt="googlecloud"
									/>
								</div>
							</div>
						</div>

						<ul className=" space-y-3 font-mono ">
							<li>➖ AWS, GCP, Azure, Digital Ocean, Heroku, Vercel, etc.</li>
							<li>➖ Docker, Kubernetes, Nginx, etc.</li>
							<li>➖ Github. </li>
							<li>➖ Linux & Windows.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
