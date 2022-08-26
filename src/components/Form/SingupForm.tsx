import { LockClosedIcon, MailIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";
import GradientButton from "../Buttons/GradientButton";
import { SubmitButton } from "../Buttons/SubmitButton";
import { BasicInput } from "../Inputs/BasicInput";
import { CheckBox } from "../Inputs/CheckBox";
import { ForgotPassword } from "../Inputs/ForgotPassword";
import { AuthFormHeading } from "./AuthFormHeading";
export function SingupForm({}) {
    return (
        <>
            {" "}
            <div className="form  ">
                <form action="#" method="post">
                    <BasicInput
                        labelFor="Fullname"
                        labelName="fullname"
                        inputName="fullname"
                        inputType="text"
                        placeHolder="John Doe"
                        customStyle="w-full"
                        icon={<UserIcon className={'h-5 w-5'}/>}
                    />
                    <BasicInput
                        labelFor="email"
                        labelName="Email"
                        inputName="email"
                        inputType="email"
                        placeHolder="example@gmail.com"
                        customStyle="w-full"
                        icon={<MailIcon className={'h-5 w-5'}/>}
                    />
                    <BasicInput
                        labelFor="password"
                        labelName="Password"
                        inputName="password"
                        inputType="password"
                        placeHolder="****************"
                        customStyle="w-full"
                        icon={<LockClosedIcon className={'h-5 w-5'}/>}
                    />
                    <BasicInput
                        labelFor="password1"
                        labelName="Confirm Password"
                        inputName="password"
                        inputType="password"
                        placeHolder=""
                        customStyle="w-full"
                        icon={<LockClosedIcon className={'h-5 w-5'}/>}
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
