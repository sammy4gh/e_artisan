import React from 'react'
import logo from "../../../../public/logo/logo.svg"
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
			<div className="cursor-pointer">
				<Link href={'/'}>
					<h3 className="">
						<Image src={logo} height={20} width={100} />
					</h3>
				</Link>
			</div>
		);
}

export default Logo
