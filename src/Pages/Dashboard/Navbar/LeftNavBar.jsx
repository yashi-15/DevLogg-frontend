import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { MdBookmark, MdOutlineSettings, MdOutlineSms, MdSearch, MdTerminal } from 'react-icons/md'
import {NavLink} from 'react-router'

const LeftNavBar = () => {
  return (
    <aside className='w-full md:w-64 flex-shrink-0 overflow-y-auto bg-[#191C22] py-1 px-2 md:py-4 md:px-0 flex flex-col justify-between'>
      <div className='w-full flex flex-row md:flex-col gap-1 justify-around md:justify-center'>
        <NavLink to={"/dashboard/feed"} className='text-lightgrey flex flex-col md:flex-row gap-2 items-center px-5 py-2 hover:bg-[#1D2026]'>
            <span className='text-xl md:text-base'><MdTerminal /></span>
            <span className='text-[10px] md:text-base'>Home</span>
        </NavLink>
        <NavLink to={"/dashboard/network"} className='text-lightgrey flex flex-col md:flex-row gap-2 items-center px-5 py-2 hover:bg-[#1D2026]'>
            <span className='text-xl md:text-base'><FaUserFriends /></span>
            <span className='text-[10px] md:text-base'>Network</span>
        </NavLink>
        <NavLink to={"/dashboard/search"} className='text-lightgrey flex flex-col md:flex-row gap-2 items-center px-5 py-2 hover:bg-[#1D2026]'>
            <span className='text-xl md:text-base'><MdSearch /></span>
            <span className='text-[10px] md:text-base'>Search</span>
        </NavLink>
        <NavLink to={"/dashboard/inbox"} className='text-lightgrey flex flex-col md:flex-row gap-2 items-center px-5 py-2 hover:bg-[#1D2026]'>
            <span className='text-xl md:text-base'><MdOutlineSms /></span>
            <span className='text-[10px] md:text-base'>Inbox</span>
        </NavLink>
        <NavLink to={"/dashboard/bookmarks"} className='text-lightgrey flex flex-col md:flex-row gap-2 items-center px-5 py-2 hover:bg-[#1D2026]'>
            <span className='text-xl md:text-base'><MdBookmark /></span>
            <span className='text-[10px] md:text-base'>Bookmarks</span>
        </NavLink>
        <NavLink to={"/dashboard/settings"} className='text-lightgrey hidden md:flex flex-col md:flex-row gap-2 items-center px-5 py-2 hover:bg-[#1D2026]'>
            <span className='text-xl md:text-base'><MdOutlineSettings /></span>
            <span className='text-[10px] md:text-base'>Settings</span>
        </NavLink>
      </div>
      <div className='hidden md:flex items-center gap-2 px-5'>
        <p className='text-lightgrey text-sm'>Help</p>
        <p className='text-lightgrey text-sm'>Privacy</p>
      </div>
    </aside>
  )
}

export default LeftNavBar
