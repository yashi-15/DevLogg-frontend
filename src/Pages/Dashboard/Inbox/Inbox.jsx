import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router";
import MessageCard from './MessageCard';


const data = [
    {
        id: "alexr",
        name: "Alex Rivera",
        bio: "Senior Frontend Architect",
        text: "Sent a code snippet...",
        time: "2m ago",
        unread: true,
        image: "/assets/alex.png"
    },
    {
        id: "sarahc",
        name: "Sarah Chen",
        bio: "Senior Frontend Architect",
        text: "The PR looks great, merging now.",
        time: "1h ago",
        unread: false,
        image: "/assets/sarah.png"
    },
    {
        id: "jordans",
        name: "Jordan Smith",
        bio: "Full Stack Developer",
        text: "Are you attending the meetup?",
        time: "Yesterday",
        unread: false,
        image: "/assets/jordan.png"
    },
    {
        id: "elenap",
        name: "Elena Popova",
        bio: "Backend Engineer",
        text: "That refactor saved us 20% on l...",
        time: "Oct 24",
        unread: false,
        image: "/assets/elena.png"
    }
];

const Inbox = () => {

    const navigate = useNavigate()

    return (
        <>
        <div className='hidden lg:flex h-full'>
            <div className='flex-2 xl:flex-2 flex flex-col p-8 bg-[#191C22]'>
                <h1 className='text-xl font-semibold text-white mb-4'>Messages</h1>
                <div className='flex items-center text-lightgrey gap-2 rounded-sm mb-4 p-2 bg-[#32353C]'>
                    <FaSearch />
                    <input type='text' name='search' placeholder='Search direct messages...' />
                </div>
                <div className='grow flex flex-col gap-1 items-center justify-start py-4'>
                    {data.map((convo) => {
                        return (
                            <MessageCard key={convo.id} name={convo.name} text={convo.text} time={convo.time} image={convo.image} unread={convo.unread} selectConvo={() => navigate(convo.id)} />
                        )
                    })}
                </div>
            </div>
            <div className='flex-3 xl:flex-5 flex flex-col justify-center'>
                <Outlet />
            </div>
        </div>
        <div className='flex flex-col lg:hidden h-full'>
            <Outlet />
        </div>
        </>
    )
}

export default Inbox
