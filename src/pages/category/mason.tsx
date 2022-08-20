

import { LocationMarkerIcon } from "@heroicons/react/solid";
import { SubmitButton } from "../../components/Buttons/SubmitButton";
import { BasicInput } from "../../components/Inputs/BasicInput";
import { ArtisanCard } from "../../components/Cards/ArtisanCard";
import artisan_img from "../../../public/assets/backgrounds/wave-haikei.svg";

// import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		// <Login     />
		<section className=" h-screen">
			<div className="">
				<div className="md:bg-world-map bg-red-500/10 bg-blend-darken py-10 ">
					{/* <div id="hero" className="  flex flex-col justify-around mx-auto ">
						<LocationMarkerIcon className="h-20" />
					</div> */}
					<div className="mx-10 md:mx-40">
						<div className="text-center">
							<h1 className="font-bold text-2xl md:text-4xl text-gray-800">
								These are Masons available to offer their services
							</h1>

							<h3 className="text-xl my-2">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Officiis doloribus eaque accusamus voluptatem. Obcaecati dolorum
								suscipit quis architecto iusto quasi?{" "}
							</h3>
						</div>
						<div className="flex flex-col justify-center md:flex-row gap-4 w-full ">
							<BasicInput
								labelFor="find"
								labelName="Find a particuler mason"
								inputName="find"
								inputType="text"
								customStyle="w-full"
							/>

							<SubmitButton buttonName="Find" customStyle="px-4 " />
						</div>
					</div>
				</div>
				<div className="artisans  mt-10 mx-10">
					<div>
						<h1 className="font-bold text-xl text-center text-gray-800">
							Available Masons
						</h1>
					</div>

					<div className="grid md:grid-cols-3  gap-4 ">
						<ArtisanCard artisan_img={artisan_img} />
						<ArtisanCard artisan_img={artisan_img} />
						<ArtisanCard artisan_img={artisan_img} />
					</div>
				</div>
			</div>
		</section>
	);
}
