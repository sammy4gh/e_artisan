import React from "react";
import { InputProps } from "./InputTypes";

export function TextInput({ placeHolder, inputType, inputName, customStyle }:InputProps) {
	return (
		<input
			placeholder={placeHolder}
			type={inputType}
			name={inputName}
			id={inputType}
			className={` ${customStyle} border-none rounded-lg font-bold focus:border focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500`}
		/>
	);
}
