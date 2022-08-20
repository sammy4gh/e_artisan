import React from "react";
import Image from "next/image";
import Link from "next/link";

export function CategoryCard({ artisan_img }: any ) {
	return (
		<>
			<Link href={"/category/mason"}>
				<div className="card shadow-lg py-3 px-3">
					<div className="grid grid-cols-3  gap-2">
						<div className="col-span-1">
							<Image src={artisan_img} layout="responsive" />
						</div>
						<div className="col-span-2">
							<h4 className="font-semibold">Mason</h4>
							<p className="text-gray-500">
								Block work plastering or pavement work
							</p>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}
