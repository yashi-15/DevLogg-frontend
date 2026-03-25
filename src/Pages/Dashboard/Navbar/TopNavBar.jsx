import React from 'react'
import { FaBell, FaUserCircle } from 'react-icons/fa'

const NavBar = () => {
    return (
        <nav className='h-16 flex-shrink-0 z-10 flex justify-between items-center p-4 bg-dark'>
            <ul className='flex gap-4 justify-center items-center'>
                <li className='text-primary mr-4'>DevLogg</li>
            </ul>

            <ul className='flex gap-4 justify-center items-center'>
                <li className='hidden md:block'><button className='w-22 px-3 py-1 rounded-sm bg-linear-to-r from-primary to-secondary text-black'>Post</button></li>
                <li className='text-grey'>
                    <FaBell />
                </li>
                <li className='text-grey'>
                    <FaUserCircle />
                </li>

            </ul>
        </nav>
    )
}

export default NavBar
