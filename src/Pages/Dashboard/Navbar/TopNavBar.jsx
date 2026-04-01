import React, { useContext, useState } from 'react'
import { FaBell, FaUserCircle } from 'react-icons/fa'
import { logOut } from '../../../common/sessions'
import { UserContext } from '../../../context/UserContext'

const NavBar = () => {
    const [showOptions, setShowOptions] = useState(false)

    const { setUserAuth } = useContext(UserContext)

    const handleLogout = () => {
        logOut()
        setUserAuth({ access_token: null })
        console.log("hii");
    }

    const handleBlur = () => {
        setTimeout(() => {
            setShowOptions(false)
        }, 200);
    }

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
                <li onClick={() => setShowOptions(!showOptions)} onBlur={handleBlur} className='text-grey'>
                    <FaUserCircle />
                    {showOptions && <div className='bg-dark border border-zinc-700 absolute top-16 right-2'>
                        <ul className='flex flex-col justify-center items-center'>
                            <li className='text-grey border-b border-zinc-700 p-3'>
                                Profile
                            </li>
                            <li onClick={handleLogout} className='text-grey border-b border-zinc-700 p-3'>
                                Logout
                            </li>

                        </ul>
                    </div>}
                </li>

            </ul>
        </nav>
    )
}

export default NavBar
