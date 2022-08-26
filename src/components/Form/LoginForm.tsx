import { MailIcon, LockClosedIcon } from "@heroicons/react/solid";
import React from "react";
import GradientButton from "../Buttons/GradientButton";
import { SubmitButton } from "../Buttons/SubmitButton";
import { BasicInput } from "../Inputs/BasicInput";
import { CheckBox } from "../Inputs/CheckBox";
import { ForgotPassword } from "../Inputs/ForgotPassword";
import { AuthFormHeading } from "./AuthFormHeading";

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
						placeHolder=""
						customStyle="w-full py-1"
                        icon={<MailIcon className={'h-5 w-5'}/>}
					/>
					<BasicInput
                        icon={<LockClosedIcon className={'h-5 w-5'}/>}
						labelFor="password"
						labelName="Password"
						inputName="password"
						inputType="password"
						placeHolder=""
						customStyle="w-full py-1"
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

		</>
	);
}
<LoginForm />;
