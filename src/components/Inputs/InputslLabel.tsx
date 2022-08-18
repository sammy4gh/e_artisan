
import React from "react";
import { LabelProps } from "./InputTypes";

export function InputslLabel({ labelFor, labelName }: LabelProps) {
	return (
		<label
			htmlFor={labelFor}
			className="text-gray-500 text-sm my-2 ml-3 font-semibold"
		>
			{labelName}
		</label>
	);
}
