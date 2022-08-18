/** @format */

import { InputslLabel } from "./InputslLabel";
import React from "react";
import { InputProps, LabelProps } from "./InputTypes";

type BasicInputProps = LabelProps & InputProps;

export function BasicInput({
	inputName,
	inputType,
	labelFor,
	labelName,
	placeHolder,
}: BasicInputProps) {
	return (
		<div className="login_input my-2 rouunded-lg bg-white drop-shadow-sm px-2 py-1 shadow-inner">
			<InputslLabel labelFor={labelFor} labelName={labelName} />{" "}
			<div>
				<input
					placeholder={placeHolder}
					type={inputType}
					name={inputName}
					id={inputType}
					className=" w-full border-none rounded-lg font-bold focus:border focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500"
				/>
			</div>
		</div>
	);
}
