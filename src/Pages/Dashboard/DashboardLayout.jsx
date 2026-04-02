import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router";
import TopNavBar from './Navbar/TopNavBar'
import LeftNavBar from './Navbar/LeftNavBar';
import { UserContext } from '../../context/UserContext';

const Dashboard = () => {

    const { userAuth } = useContext(UserContext)

    return (
        userAuth.access_token ?
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
            : <Navigate to={'/signin'} />
    )
}

export default Dashboard
