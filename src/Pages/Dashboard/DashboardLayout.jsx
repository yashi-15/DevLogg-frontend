import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Feed from './Feed/Feed'
import TopNavBar from './Navbar/TopNavBar'
import LeftNavBar from './Navbar/LeftNavBar';

const Dashboard = () => {
    return (
        <>
            <TopNavBar />
            <div className='flex bg-[#0B0E14]'>
                <div className='basis-1/8'>
                    <LeftNavBar />
                </div>
                <div className='basis-7/8'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Dashboard
