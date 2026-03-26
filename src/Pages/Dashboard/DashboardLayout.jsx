import React from 'react'
import { Outlet } from "react-router";
import TopNavBar from './Navbar/TopNavBar'
import LeftNavBar from './Navbar/LeftNavBar';

const Dashboard = () => {
    return (
        <div>
            <div className="h-screen overflow-hidden hidden md:flex flex-col">
                <TopNavBar />
                <div className="flex-1 flex overflow-hidden">
                    <LeftNavBar />
                    <main className="flex-1 overflow-y-auto">
                        <Outlet />
                    </main>
                </div>
            </div>
            <div className="h-screen overflow-hidden md:hidden flex flex-col">
                <TopNavBar />
                <div className="grow overflow-y-auto">
                    <main className="flex-1 h-full">
                        <Outlet />
                    </main>
                </div>
                <LeftNavBar />
            </div>
        </div>
    )
}

export default Dashboard
