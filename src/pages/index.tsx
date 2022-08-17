import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className="h-full">

      <div className='flex flex-col'>
        <div>
          <h3>Hello lets continue</h3>
          <h1>Login</h1>
        </div>
        <div className='login_form'>
          <form action="">
            <div className='login_input rouunded-lg bg-white drop-shadow-sm px-3 py-2 shadow-inner'>
              <label htmlFor="email" className='text-gray-600 font-bold'>Email</label>
              <div>
                <input type="email" name="email " id="email" className='bg-red border-blue-500' />
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

