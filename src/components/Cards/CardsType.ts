type CardProps = {
    title : string,
    image? : string,
}

export type ArtisanCardProps = CardProps & {
    location : string,
    rating : number,
    bio : string,
    slug : string
}