import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [IsSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!IsSignInForm);

    }
    return (
        <div>
            <Header />

            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg img' />
            </div>
            <form className='absolute bg-opacity-80 rounded-lg bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white'>
                <h1 className='font-bold text-3xl py-4'>{IsSignInForm ? "Sign-In" : "Sign-up"}</h1>
                {!IsSignInForm && (<input type='text' placeholder='Full Name' className='bg-gray-700 py-2 m-2 w-full' />)}
                <input type='text' placeholder='email address' className='bg-gray-700 py-2 m-2 w-full' />

                <input type='password' placeholder='password' className='py-2 bg-gray-700 m-2 w-full' />
                <button className='p-2 mx-2 my-6 w-full  rounded-lg bg-red-700'>{IsSignInForm ? "Sign-In" : "Sign-up"}</button>
                <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>{IsSignInForm ? "New to Netflix ? Sign up" : "Already a member"}</p>
            </form>
        </div>
    )
}

export default Login
