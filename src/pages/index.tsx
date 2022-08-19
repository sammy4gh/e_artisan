import { CategoryCard } from './../components/Cards/CategoryCard';
import { Login } from "./login";
import { ForgotPassword } from "./../components/Inputs/ForgotPassword";
import { BasicInput } from "./../components/Inputs/BasicInput";
import GradientButton from "./../components/Buttons/GradientButton";
import { SubmitButton } from "./../components/Buttons/SubmitButton";
import { CheckBox } from "./../components/Inputs/CheckBox";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "./../components/Carousel/Carousel";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { TextInput } from "../components/Inputs/TextInput";
import { InputslLabel } from "../components/Inputs/InputslLabel";
import artisan_img from "../../public/assets/backgrounds/wave-haikei.svg";

// import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		// <Login     />
		<section className=" h-screen">
			<div className="">
				<div className="md:bg-world-map bg-red-500/10 bg-blend-darken py-10 ">
					<div id="hero" className="  flex flex-col justify-around mx-auto ">
						<LocationMarkerIcon className="h-20" />
					</div>
					<div className='mx-10'>
						<div className="text-center">
							<h1 className="font-bold text-2xl md:text-6xl text-gray-800">
								Search for artisans in your area
							</h1>

							<h3 className="text-xl my-2">Find reliable artisans</h3>
						</div>
						<div className="flex flex-col justify-center md:flex-row gap-4 w-full ">
							<BasicInput
								labelFor="location"
								labelName="Location"
								inputName="location"
								inputType="text"
								customStyle="w-full"
							/>

							<BasicInput
								labelFor="skill"
								labelName="Skill"
								inputName="skill"
								inputType="text"
								customStyle="w-full"
							/>

							<SubmitButton buttonName="Locate" customStyle="px-4" />
						</div>
					</div>
				</div>
				<div className="artisans  mt-10 mx-10">
					<div>
						<h1 className="font-bold text-xl text-center text-gray-800">
							Our most popular jobs
						</h1>
					</div>

					<div className="grid md:grid-cols-3  gap-4 ">
						<CategoryCard artisan_img={artisan_img} />
						<CategoryCard artisan_img={artisan_img} />
						<CategoryCard artisan_img={artisan_img} />
						<CategoryCard artisan_img={artisan_img} />
						<CategoryCard artisan_img={artisan_img} />
						<CategoryCard artisan_img={artisan_img} />
					</div>
				</div>
			</div>
		</section>
	);
}
