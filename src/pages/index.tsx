import { gql } from "@apollo/client";
import client from "../../apollo-client";

import { CategoryCard } from './../components/Cards/CategoryCard';

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
import { CategoryCardProps } from "../components/Cards/CardsType";
import {useState, useEffect, } from 'react';
import Router from 'next/router';
import { PageTransition } from 'next-page-transitions'
// import styles from '../styles/Home.module.css'
import {  CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
	display: "block",
	margin: "0 auto",
	borderColor: "red",
};
export async function getStaticProps(){
	const { data } = await client.query({
		query: gql`
			query GetCategories {
				categories {
					name,
					image {
						name,
						url
					},
					description
				}
			}
		`,
	});

	return {
		props: {
			categories: data.categories,
		},
	};
}

export default function Home({categories}) {

	const [loading, setLoading] = useState(false);
	let [color, setColor] = useState("#ffffff");

	useEffect(() => {
		console.log('loading', loading)
		Router.events.on('routeChangeStart', () => setLoading(true));
		Router.events.on('routeChangeComplete', () => setLoading(false));
		Router.events.on('routeChangeError', () => setLoading(false));
		return () => {
			Router.events.off('routeChangeStart', () => setLoading(true));
			Router.events.off('routeChangeComplete', () => setLoading(false));
			Router.events.off('routeChangeError', () => setLoading(false));
		};
	}, [Router.events]);

	return (
		// <Login     />
		<>
			{
				(loading)
					?
					<div className={'h-screen flex flex-col justify-center'}>	<ClipLoader color={color} loading={loading} cssOverride={override} size={150} /></div>
					:
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
									{
										categories.map(({name,id, description, image}: CategoryCardProps)=>(
											<CategoryCard  image_url={image.url} name={name} description={description} id={id}/>

										))
									}

								</div>
							</div>
						</div>
					</section>
			}
		</>

	);
}
