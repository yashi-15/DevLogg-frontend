import React from 'react'
import { Outlet } from "react-router";
import TopNavBar from './Navbar/TopNavBar'
import LeftNavBar from './Navbar/LeftNavBar';

const Dashboard = () => {
    return (
        <div>
            <div class="h-screen overflow-hidden hidden md:flex flex-col">
                <TopNavBar />
                <div class="flex-1 overflow-hidden">
                    <LeftNavBar />
                    <main class="flex-1 overflow-y-auto">
                        <Outlet />
                    </main>
                </div>
            </div>
            <div class="h-screen overflow-hidden md:hidden flex flex-col">
                <TopNavBar />
                <div class="grow overflow-y-auto">
                    <main class="flex-1">
                        <Outlet />
                    </main>
                </div>
                <LeftNavBar />
            </div>
        </div>
    )
}

export default Dashboard
