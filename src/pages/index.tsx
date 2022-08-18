import { Login } from './login';
import { ForgotPassword } from './../components/Inputs/ForgotPassword';
import { BasicInput } from './../components/Inputs/BasicInput';
import GradientButton from './../components/Buttons/GradientButton';
import { SubmitButton } from './../components/Buttons/SubmitButton';
import { CheckBox }from './../components/Inputs/CheckBox' 
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import {Carousel} from "./../components/Carousel/Carousel"
// import styles from '../styles/Home.module.css'



export default function Home() {
	return (
		// <Login     />
		<>
			<Carousel />
			<h1>Home</h1>
			</>
	);
}

