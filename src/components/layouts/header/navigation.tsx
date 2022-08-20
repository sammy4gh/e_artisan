import React from "react";
import Toggle from "../../toggle";
import GithubIcon from "../../icons/github";
import Link from "next/link";

const Navigation = () => {
  return (
		<>
			{/* <div className="ml-10 flex items-baseline space-x-4 gap-4"> */}

			<div className="md:block lg:flex lg:gap-8 text-gray-50 font-bold">
				<div className="py-2 border-b-2  	lg:border-0">
					<Link href="/">
						<a className="">GET QUOTES</a>
					</Link>
				</div>
				<div className="text-2xl text-red-500">
					|
				</div>
				<div className="py-2 border-b-2 border-opacity-10 border-gray-100	lg:border-0">
					<Link href="/account/login">
						<a className="">Log out</a>
					</Link>
				</div>
				<div className="py-2 px-2 rounded-lg bg-red-500">
					<Link href="/account/login">
						<a className="">Artisan Signup</a>
					</Link>
				</div>

				{/* <div className="place-self-center py-2 border-gray-100 lg:border-0">
          
          <Toggle />
        </div> */}
			</div>
		</>
	);
};

export default Navigation;
