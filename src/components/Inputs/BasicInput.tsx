import { TextInput } from './TextInput';

import { InputslLabel } from "./InputslLabel";
import React from "react";
import { InputProps, LabelProps } from "./InputTypes";

type BasicInputProps = LabelProps & InputProps;
import { MailIcon } from "@heroicons/react/solid";

export function BasicInput({
	inputName,
	inputType,
	labelFor,
	labelName,
	placeHolder,
	customStyle,
	icon
}: BasicInputProps) {
	return (
		<div className="login_input my-2 rounded-lg bg-white drop-shadow-sm px-2 py-1 shadow-inner">
			<InputslLabel labelFor={labelFor} labelName={labelName} />{" "}
			<div className={'flex px-3 py-2 gap-2'}>
<div className={'flex flex-col justify-center text-center'}>
	{icon}

</div>
				<TextInput  customStyle={customStyle}  placeHolder={placeHolder} inputType={inputType} inputName={inputName}  />
			</div>
		</div>
	);
}
