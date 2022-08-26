import Link from "next/link";
import React from "react";
import { ButtonProps } from "./ButtonTypes";

export function SubmitButton({
	buttonName,
	customStyle,
	textColor,
}: ButtonProps) {
	return (
		<div className="flex flex-col justify-center   my-6">
			<Link href={'/'}>
				<input
					type="submit"
					value={buttonName}
					className={`${customStyle} bg-red-500 cursor-pointer  py-2  rounded-lg text-gray-50 font-bold hover:animate-bounce transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10  duration-300`}
				/>
			</Link>
		</div>
	);
}
