import React from 'react'
import { FaBell, FaUserCircle } from "react-icons/fa";
import {NavLink} from 'react-router'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-5'>
            <ul className='flex gap-4 justify-center items-center'>
                <li className='text-primary mr-4'>DevLogg</li>
                <li className='text-grey hidden md:block'>Feed</li>
                <li className='text-grey hidden md:block'>Inbox</li>
                <li className='text-grey hidden md:block'>Search</li>
                <li className='text-grey hidden md:block'>Bookmarks</li>
            </ul>

            <ul className='flex gap-4 justify-center items-center'>
                <li><NavLink to={'/signin'} className='w-16 md:w-22 px-3 py-2 rounded-sm bg-black text-white text-sm md:text-base'>Sign In</NavLink></li>
                <li><button className='w-16 md:w-22 px-3 py-2 rounded-sm bg-linear-to-r from-primary to-secondary text-black text-sm md:text-base'>Post</button></li>
            </ul>
        </div>
    )
}

export default Header
