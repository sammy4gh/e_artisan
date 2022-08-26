import React from "react";
import { InputProps } from "./InputTypes";

export function TextInput({ placeHolder, inputName, customStyle }:InputProps) {
	return (
		<input
			placeholder={placeHolder}
			name={inputName}
			id={inputName}
			className={` ${customStyle} border-none py-2 px-2 text-sm rounded-lg font-semibold  focus:border focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition ease-in-out delay-150 hover:ring-red-300  duration-300`}
		/>
	);
}
