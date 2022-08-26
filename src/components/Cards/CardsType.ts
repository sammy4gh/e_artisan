type CardProps = {
    title? : string | any,
    image? : string | any,
        slug? : string

}

export type ArtisanCardProps = CardProps & {
    location : string,
    rating : number,
    bio : string,
    id : string,
    name : string,
    image_url : string,
}

export type CategoryCardProps = CardProps & {

    id : string
    name : string
    image_url : string
    description  : string
}