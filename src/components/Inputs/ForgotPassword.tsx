/** @format */

import Link from "next/link";
import React from "react";
export function ForgotPassword({}) {
	return (
		<Link href={"/"}>
			<a href="#">
				<label htmlFor="remember" className="text-gray-500 ml-2">
					Forgot password?
				</label>
			</a>
		</Link>
	);
}
