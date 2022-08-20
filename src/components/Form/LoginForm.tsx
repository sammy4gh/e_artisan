import React from "react";
import GradientButton from "../Buttons/GradientButton";
import { SubmitButton } from "../Buttons/SubmitButton";
import { BasicInput } from "../Inputs/BasicInput";
import { CheckBox } from "../Inputs/CheckBox";
import { ForgotPassword } from "../Inputs/ForgotPassword";
export function LoginForm({}) {
	return (
		<>
			{" "}
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
		</>
	);
}
<LoginForm />;
