import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { MdBookmark, MdOutlineSettings, MdOutlineSms, MdSearch, MdTerminal } from 'react-icons/md'

const LeftNavBar = () => {
  return (
    <div className='w-60 h-screen bg-[#191C22] py-4 flex flex-col justify-between pt-20'>
      <ul className='flex flex-col gap-1 justify-center'>
        <li className='text-lightgrey flex gap-2 items-center px-5 py-2 hover:bg-[#1D2026]'>
            <span><MdTerminal /></span>
            <span>Home</span>
        </li>
        <li className='text-lightgrey flex gap-2 items-center px-5 py-2 hover:bg-[#1D2026]'>
            <span><FaUserFriends /></span>
            <span>Network</span>
        </li>
        <li className='text-lightgrey flex gap-2 items-center px-5 py-2 hover:bg-[#1D2026]'>
            <span><MdSearch /></span>
            <span>Search</span>
        </li>
        <li className='text-lightgrey flex gap-2 items-center px-5 py-2 hover:bg-[#1D2026]'>
            <span><MdOutlineSms /></span>
            <span>Inbox</span>
        </li>
        <li className='text-lightgrey flex gap-2 items-center px-5 py-2 hover:bg-[#1D2026]'>
            <span><MdBookmark /></span>
            <span>Bookmarks</span>
        </li>
        <li className='text-lightgrey flex gap-2 items-center px-5 py-2 hover:bg-[#1D2026]'>
            <span><MdOutlineSettings /></span>
            <span>Settings</span>
        </li>
      </ul>
      <div className='flex items-center gap-2 px-5'>
        <p className='text-lightgrey text-sm'>Help</p>
        <p className='text-lightgrey text-sm'>Privacy</p>
      </div>
    </div>
  )
}

export default LeftNavBar
