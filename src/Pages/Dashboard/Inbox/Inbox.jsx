import React from 'react'
import { FaSearch } from "react-icons/fa";

const MessageCard = ({ name, text, time, image, unread = false }) => {
    return (
        <div className='rounded-sm flex gap-4 items-center w-full'>
            <div className='rounded-sm'>
                <img src={image} className='w-13 h-13' />
            </div>
            <div className='grow flex gap-2 justify-between'>
                <div>
                    <h2 className='text-white'>{name}</h2>
                    <p className={`text-sm ${unread ? "text-primary font-semibold" : "text-lightgrey font-light"}`}>{text}</p>
                </div>
                <p className='text-xs text-lightgrey font-light'>{time}</p>
            </div>
        </div>
    )
}

const Inbox = () => {
    return (
        <div className='flex'>
            <div className='flex-2 p-8 bg-[#191C22]'>
                <h1 className='text-xl font-semibold text-white mb-4'>Messages</h1>
                <div className='flex items-center text-lightgrey gap-2 rounded-sm mb-4 p-2 bg-[#32353C]'>
                    <FaSearch />
                    <input type='text' name='search' placeholder='Search direct messages...' />
                </div>
                <div className='flex flex-col gap-4 items-center justify-center py-4'>
                    <MessageCard name={"Alex Rivera"} text={"Sent a code snippet..."} time={"2m ago"} image={"/assets/alex.png"} unread={true} />
                    <MessageCard name={"Sarah Chen"} text={"The PR looks great, merging now."} time={"1h ago"} image={"/assets/sarah.png"} />
                    <MessageCard name={"Jordan Smith"} text={"Are you attending the meetup?"} time={"yesterday"} image={"/assets/jordan.png"} />
                    <MessageCard name={"Elena Popova"} text={"That refactor saved us 20% on lat..."} time={"Oct 24"} image={"/assets/elena.png"} />
                </div>
            </div>
            <div className='flex-5'></div>
        </div>
    )
}

export default Inbox
