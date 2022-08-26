import React from "react";
import Image from "next/image";
import { LocationMarkerIcon, StarIcon  } from "@heroicons/react/solid";
import Link from "next/link"
import { ArtisanCardProps } from "./CardsType";
//import from "../../../public/assets/backgrounds"
export function ArtisanCard({ image_url, id, bio, rating, location , name}: ArtisanCardProps ) {
	return (
		<>
			<Link href={` /account/artisan/${id}`}>
				<div className="card shadow-lg rounded-lg py-3 px-3 cursor-pointer">
					<div className="grid grid-cols-2  gap-2">
						<div className="">
							<Image src={'http://localhost:1337/'+image_url}  width={100} height={100} className={'rounded-lg'} />
						</div>
						<div className="flex flex-col justify-between">
							<h4 className="font-semibold">{name}</h4>
							<p className="text-gray-500 truncate">
								{bio || 'no bio'}
							</p>
							<div className="flex justify-between">
								<div className="flex">
									<div className="flex flex-col justify-center mr-1	">
										<LocationMarkerIcon className="h-3 w-3" />
									</div>
									<h3>{location}</h3>
								</div>
								<div className="flex  my-auto">
									<StarIcon className="text-amber-400 h-3 w-3" />
									<StarIcon className="text-amber-400 h-3 w-3" />
									<StarIcon className="text-amber-400 h-3 w-3" />
									<StarIcon className="text-amber-400 h-3 w-3" />
									<StarIcon className="text-amber-400 h-3 w-3" />
								</div>
							</div>
						</div>
					</div>
				</div>

			</Link>
		</>
	);
}
