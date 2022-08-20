import { TextInput } from './TextInput';

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
	customStyle
}: BasicInputProps) {
	return (
		<div className="login_input my-2 rouunded-lg bg-white drop-shadow-sm px-2 py-1 shadow-inner">
			<InputslLabel labelFor={labelFor} labelName={labelName} />{" "}
			<div>
				<TextInput  customStyle={customStyle}  placeHolder={placeHolder} inputType={inputType} inputName={inputName}  />
			</div>
		</div>
	);
}
