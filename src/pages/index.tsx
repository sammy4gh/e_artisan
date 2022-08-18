import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

// import styles from '../styles/Home.module.css'



export default function Home() {
	return (
		<div className="h-screen flex flex-col justify-around">

			<div className=''>
				<h3 className='text-xl my-2'>Hello!, lets continue</h3>
				<h1 className='font-bold text-6xl text-gray-800'>Login</h1>
			</div>
			<div className='login_form'>
				<form action="">
					<div className='login_input my-2 rouunded-lg bg-white drop-shadow-sm px-2 py-1 shadow-inner'>
						<label htmlFor="email" className='text-gray-500 text-sm my-2 font-semibold'>Email</label>
						<div>
							<input type="email" name="email " id="email" className=' w-full border-none rounded-lg font-bold focus:border focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500' />
						</div>
					</div>

					<div className='login_input my-2 rouunded-lg bg-white drop-shadow-sm px-2 py-1 shadow-inner'>
						<label htmlFor="password" className='text-gray-500 text-sm font-semibold '>Password</label>
						<div>
							<input type="password" name="password" id="password" className='bg-red w-full rounded-lg font-bold border-none focus:border focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500' />
						</div>
					</div>
					<div className='flex justify-between'>
						<div id=''>
							<input type="checkbox" name="remember" id="remember" className='rounded border-none shadow-md focus:ring-red-500 text-red-500' />
							<label htmlFor="remember" className='text-gray-500 ml-2'>Remeber me</label>
						</div>

						<Link href={'/'}>
							<a href="#"><label htmlFor="remember" className='text-gray-500 ml-2'>Forgot password?</label></a>
						</Link>
					</div>

					<div className='flex flex-col justify-center  my-6'>
						<input type="submit" value="Submit" className=' bg-red-500   py-2  rounded-lg text-gray-50 font-bold' />
					</div>

				</form>
				<h3 className='text-center font-semibold text-gray-500'>or login with</h3>
			</div>
			<div id="federated_log" className='flex justify-between'>

				<button className='bg-gradient-to-b from-gray-200 to-gray-100 py-2 px-10  rounded-lg text-gray-gray-800 font-bold'>Google</button>
				<button className='bg-gradient-to-b from-blue-800 to-blue-700 py-2  px-10 rounded-lg text-gray-50 font-bold'>Facebook</button>

			</div>

			<div>
				<h3 className='text-center font-semibold text-gray-500'>Dont have an account
					<span>
						<Link href={'/'}>
							<a href="#" className='text-blue-800'> Sign up</a>
						</Link>
					</span>
				</h3>
			</div>
		</div>
	)
}

