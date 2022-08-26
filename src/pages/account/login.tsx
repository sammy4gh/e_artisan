import { AuthFormHeading } from "../../components/Form/AuthFormHeading";
import React from "react";
import { ForgotPassword } from "../../components/Inputs/ForgotPassword";
import { BasicInput } from "../../components/Inputs/BasicInput";
import GradientButton from "../../components/Buttons/GradientButton";
import { SubmitButton } from "../../components/Buttons/SubmitButton";
import { CheckBox } from "../../components/Inputs/CheckBox";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "../../components/Form/LoginForm";
import {useState, useEffect} from 'react';
import Router from 'next/router';
import { PageTransition } from 'next-page-transitions'


function Login({}) {
	const [loading, setLoading] = useState(false);
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
		<>
			{
				(loading)
					?
					<h1>Loading...</h1>
					:
					<div className="h-screen  md:bg-login-wave bg-no-repeat bg-cover bg-center bg-fixed flex justify-center justify-items-center px-10 ">
						<div className=" h-full md:h-4/5 flex flex-col justify-around m-auto md:bg-gray-50  md:shadow-lg md:rounded-lg md:py-3 md:px-10 md:w-2/4 lg:w-2/6">
							<AuthFormHeading mainHead={'Login'} subhead={"Hello!, lets continue"}/>

							<LoginForm />
							<div id="federated_log" className="flex justify-between">
								<div className="mr-2">
									<GradientButton
										buttonName="Google"
										textColor={`text-gray-gray-800`}
									/>
								</div>{" "}
								<div className="ml-2">
									<GradientButton
										buttonName="Facebook"
										gradientColorFrom="from-blue-800"
										gradientColorTo="to-blue-700"
									/>
								</div>
							</div>

							<div>
								<h3 className="text-center font-semibold text-gray-500">
									Dont have an account
									<span>
							<Link href={"/account/signup"}>
								<a href="#" className="text-blue-800">
									{" "}
									Sign up
								</a>
							</Link>
						</span>
								</h3>
							</div>
						</div>
					</div>

			}
		</>
	);
}

export default Login;
