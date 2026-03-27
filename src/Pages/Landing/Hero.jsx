import React from 'react'
import {NavLink} from 'react-router'

const Hero = () => {
    return (
        <div className='h-screen max-w-[80%] mx-auto flex gap-2 items-center justify-center'>
            <div className='w-40 h-40 bg-amber-700 rounded-full absolute left-20 blur-3xl z-5'></div>
            <div className='w-70 h-70 bg-blue-900 rounded-full absolute right-20 top-[10%] blur-3xl z-5'></div>
            <div className='flex-1 z-8'>
                <h1 className='text-white text-7xl font-semibold mb-4'>Architect your<br />
                    career,<br /> <span className='text-primary'>connect</span> <br />
                    with builders.</h1>
                <p className='text-lightgrey my-4'>A high-fidelity social network where your code is your
                    identity. Proof of work meets peer validation in an
                    editorial space designed for the modern engineer.</p>
                <div className='flex gap-4 mt-4'>
                    <NavLink to={'/signin'} className='px-3 py-2 rounded-sm bg-linear-to-r from-primary to-secondary text-black font-semibold'>Initialize Profile</NavLink>
                    <button className='px-3 py-2 rounded-sm bg-[#272A31] text-white font-semibold'>Explore Projects</button>
                </div>
            </div>
            <div className='hidden md:block flex-1'>
                <div className='bg-black rounded-sm'>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero
