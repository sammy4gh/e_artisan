import React from "react";
import { ForgotPassword } from "./../components/Inputs/ForgotPassword";
import { BasicInput } from "./../components/Inputs/BasicInput";
import GradientButton from "./../components/Buttons/GradientButton";
import { SubmitButton } from "./../components/Buttons/SubmitButton";
import { CheckBox } from "./../components/Inputs/CheckBox";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

 function Login({}) {
  return (
		<div className="h-screen  md:bg-login-wave bg-no-repeat bg-cover bg-center bg-fixed flex justify-center justify-items-center px-10 ">
			<div className=" h-full md:h-4/5 flex flex-col justify-around m-auto md:bg-gray-50  md:shadow-lg md:rounded-lg md:py-3 md:px-10 md:w-2/4 lg:w-2/6">
				<div className="">
					<h3 className="text-xl my-2">Hello!, lets continue</h3>
					<h1 className="font-bold text-6xl text-gray-800">Login</h1>
				</div>
				<div className="form  ">
					<form action="#" method="post">
						<BasicInput
							labelFor="email"
							labelName="Email"
							inputName="email"
							inputType="email"
							placeHolder="example@gmail.com"
							customStyle="w-full"
						/>
						<BasicInput
							labelFor="password"
							labelName="Password"
							inputName="password"
							inputType="password"
							placeHolder="****************"
							customStyle="w-full"
						/>

						<div className="flex justify-between">
							<CheckBox />

							<ForgotPassword />
						</div>

						<SubmitButton buttonName="Submit" />
					</form>
					<h3 className="text-center font-semibold text-gray-500">
						or login with
					</h3>
				</div>
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
							<Link href={"/"}>
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
	);
}
  
export default Login