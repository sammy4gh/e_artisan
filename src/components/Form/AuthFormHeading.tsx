import React from "react";
type HeadProps={
	mainHead : any,
	subhead : any
}
export function AuthFormHeading({mainHead, subhead } : HeadProps) {
	return (
		<div >
			<h3 className="text-xl my-2">{subhead}</h3>
			<h1 className="font-bold text-6xl text-gray-800">{mainHead}</h1>
		</div>
	);
}
