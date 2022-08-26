
import React from "react";

export function CheckBox({}) {
	return (
		<div id="">
			<input
				type="checkbox"
				name="remember"
				id="remember"
				className="rounded border-none shadow-md focus:ring-red-500 text-red-500 transition ease-in delay-150   duration-300"
			/>
			<label htmlFor="remember" className="text-gray-500 ml-2">
				Remeber me
			</label>
		</div>
	);
}
