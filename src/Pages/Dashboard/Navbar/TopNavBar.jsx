import React from 'react'
import { FaBell, FaUserCircle } from 'react-icons/fa'

const NavBar = () => {
    return (
        <div className='absolute w-full flex justify-between items-center p-4 bg-dark'>
            <ul className='flex gap-4 justify-center items-center'>
                <li className='text-primary mr-4'>DevLogg</li>
                {/* <li className='text-grey'>Feed</li>
                <li className='text-grey'>Inbox</li>
                <li className='text-grey'>Search</li>
                <li className='text-grey'>Bookmarks</li> */}
            </ul>

            <ul className='flex gap-4 justify-center items-center'>
                <li><button className='w-22 px-3 py-1 rounded-sm bg-linear-to-r from-primary to-secondary text-black'>Post</button></li>
                <li className='text-grey'>
                    <FaBell />
                </li>
                <li className='text-grey'>
                    <FaUserCircle />
                </li>

            </ul>
        </div>
    )
}

export default NavBar
