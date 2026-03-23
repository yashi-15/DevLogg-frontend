import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Feed from './Feed/Feed'
import TopNavBar from './Navbar/TopNavBar'
import LeftNavBar from './Navbar/LeftNavBar';

const Dashboard = () => {
    return (
        <>
                <TopNavBar />
            <div className='flex'>
                <div className='flex-2'>
                <LeftNavBar />
                </div>
                <div className='flex-8'>
                <Outlet />
                </div>
            </div>
        </>
    )
}

export default Dashboard
