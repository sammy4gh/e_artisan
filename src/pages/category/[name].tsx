import { LocationMarkerIcon } from "@heroicons/react/solid";
import { SubmitButton } from "../../components/Buttons/SubmitButton";
import { BasicInput } from "../../components/Inputs/BasicInput";
import { ArtisanCard } from "../../components/Cards/ArtisanCard";
import artisan_img from "../../../public/assets/backgrounds/wave-haikei.svg";
import { gql } from "@apollo/client";
import client from "../../..//apollo-client";
import { ArtisanCardProps } from "../../components/Cards/CardsType";
// import styles from '../styles/Home.module.css'

export async function getStaticProps(context: { params: any; }) {
  const  {params } = context
  const name = params.name
  const { data } = await client.query({
    query: gql`
      query GetArtisans {
        artisans {
          id
          bio
          name
          location
          categories {
            name
          }
          image {
            name
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      artisans: data.artisans,
      param : name,
      image : data.artisans.image || ""
    },
  };
}
export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query GetArtisanCategories {
        artisans {
          id
          categories {
            name
          }
        }
      }
    `,
  });

  const cat = data.artisans.map((artisan) => artisan.categories);
  const names = [...cat[1].map((cat)=> cat.name)]
  return {
    paths: names.map((categories) => {
     return  {
        params: {
          name: categories
        }
      }
    }),
    fallback: true,
  };
}

export default function Home({ artisans, param,image }) {

  console.log(param)
  console.log('image',image )
  return (
    // <Login     />
    <section className=" h-screen">
      <div className="">
        <div className="md:bg-world-map bg-red-500/10 bg-blend-darken py-10 ">
          {/* <div id="hero" className="  flex flex-col justify-around mx-auto ">
						<LocationMarkerIcon className="h-20" />
					</div> */}
          <div className="mx-10 md:mx-40">
            <div className="text-center">
              <h1 className="font-bold text-2xl md:text-4xl text-gray-800">
                These are Masons available to offer their services
              </h1>

              <h3 className="text-xl my-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis doloribus eaque accusamus voluptatem. Obcaecati dolorum
                suscipit quis architecto iusto quasi?{" "}
              </h3>
            </div>
            <div className="flex flex-col justify-center md:flex-row gap-4 w-full ">
              <BasicInput
                labelFor="find"
                labelName="Find a particuler mason"
                inputName="find"
                inputType="text"
                customStyle="w-full"
              />

              <SubmitButton buttonName="Find" customStyle="px-4 " />
            </div>
          </div>
        </div>
        <div className="artisans  mt-10 mx-10">
          <div>
            <h1 className="font-bold text-xl text-center text-gray-800">
              Available Masons
            </h1>
          </div>

          <div className="grid md:grid-cols-3  gap-4 ">
            {artisans.map(
              ({ name, location, bio, id, rating }: ArtisanCardProps) => (
                <div key={id}>
                  <ArtisanCard
                  image_url={artisan_img}
                  name={name}
                  location={location}
                  bio={bio}
                  rating={5}
                  id={id}
                />
                </div>
              )
            )}
            {/*<ArtisanCard image={artisan_img} title={'Kwame Atta'}  location={'Akalima'} bio={'Artisan Bio description'} rating={5} slug={'kwame-atta'} />*/}
            {/*<ArtisanCard image={artisan_img} title={'Kwame Atta'}  location={'Akalima'} bio={'Artisan Bio description'} rating={5} slug={'kwame-atta'}  />*/}
          </div>
        </div>
      </div>
    </section>
  );
}
