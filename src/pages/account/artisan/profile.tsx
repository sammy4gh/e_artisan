import OrderForm from "../../../components/Form/OrderForm";
import Image from "next/image";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import artisan_img from "../../../../public/assets/backgrounds/wave-haikei.svg";


function ProfileInfoSec({heading, info}) {
    return <div className={"flex flex-col my-2 font-bold  justify-around"}>
        <div className={"text-gray-500"}>{heading}</div>
        <div className={"font-bold text-xl "}>{info}</div>
    </div>;
}

export const Profile = ({image_url}) => {
    return (
        <section
            className={'h-screen md:bg-login-wave bg-no-repeat bg-cover bg-center bg-fixed flex justify-center justify-items-center px-10 '}>
            <div
                className={"h-full md:h-4/5 flex grid grid-cols-2 gap-8  justify-around m-auto md:bg-gray-50  md:shadow-lg md:rounded-lg md:py-6 md:px-10 md:w-3/4 lg:w-3/4"}>
                <div id={'artisan-info flex flex-col justify-around gap-4 bg-white rounded-lg '}>
                    <div id="basic" className={''}>
                        <div id={'profile-image'}>
                            <div className="rounded-full">
                                <Image src={artisan_img} layout="responsive" className={'rounded-lg'}/>
                            </div>
                        </div>
                        <ProfileInfoSec heading={'Name'} info={'John'}/>
                        <ProfileInfoSec heading={'Location'} info={'Akalima'}/>
                        {/*<ProfileInfoSec heading={'Bio'} info={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus dolorem doloribus\n' +*/}
                        {/*    '                            ipsum, maxime neque officiis pariatur perspiciatis rem sunt!'}/>*/}

                    </div>


                </div>
                <div id={'actions h-full'}>
                    <div className="mb-10">
                        <h3 className="text-xl my-2"></h3>
                        <h1 className="font-bold text-4xl text-gray-800">Service form</h1>
                    </div>
                    <OrderForm/>
                </div>
            </div>

        </section>
    );
};

export default Profile