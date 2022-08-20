import React from "react";
import Image from "next/image";
import { LocationMarkerIcon, StarIcon  } from "@heroicons/react/solid";



export function ArtisanCard({ artisan_img }: any ) {
	return (
		<div className="card shadow-lg py-3 px-3">
			<div className="grid grid-cols-2  gap-2">
				<div className="">
					<Image src={artisan_img} layout="responsive" />
				</div>
				<div className="flex flex-col justify-between">
					<h4 className="font-semibold">Kwame Atta</h4>
					<p className="text-gray-500">
						I am a mason with Lorem ipsum dolor sit amet....
					</p>
					<div className="flex justify-between">
						<div className="flex">
							<div className="flex flex-col justify-center mr-1	">
								<LocationMarkerIcon className="h-3 w-3" />
							</div>
							<h3>Akalima</h3>
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
	);
}
