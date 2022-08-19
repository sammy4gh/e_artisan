import Link from "next/link";
import React from "react";
import { ButtonProps } from "./ButtonTypes";

export function SubmitButton({
	buttonName,
	customStyle,
	textColor,
}: ButtonProps) {
	return (
		<div className="flex flex-col justify-center  my-6">
			<Link href={'/'}>
				<input
					type="submit"
					value={buttonName}
					className={`${customStyle} bg-red-500   py-2  rounded-lg text-gray-50 font-bold`}
				/>
			</Link>
		</div>
	);
}
