import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryCardProps } from "./CardsType";

export function CategoryCard({
	image_url,
	name,
	id,
	description,
	slug
	
}: CategoryCardProps) {
	console.log("image url", image_url);
	return (
		<>
			<div key={id} className={"cursor-pointer"}>
				<Link href={`/category/${slug}`} key={id}>
					<div className="card shadow-lg rounded-lg py-3 px-3">
						<div className="grid grid-cols-3  gap-2">
							<div className="col-span-1">
								<Image
									alt={"category image"}
									src={image_url}
									layout="responsive"
									className={"rounded-lg"}
								/>
							</div>
							<div className="col-span-2">
								<h4 className="font-semibold">{name}</h4>
								<p className="text-gray-500">{description}</p>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
}
