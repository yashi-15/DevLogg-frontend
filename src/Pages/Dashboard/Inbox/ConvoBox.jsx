import React from 'react'
import { FaSearch, FaPlus, FaRegSmile } from "react-icons/fa";
import { MdOutlineVideocam, MdOutlineInfo, MdSend, MdOutlineArrowBack  } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
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

const MessageTopBar = ({ name, bio, active = true, image }) => {
    const navigate = useNavigate()
    return (
        <div className='flex gap-2 md:gap-4 items-center w-full p-3 md:p-4 bg-[#1D2026]'>
            <div className='bg-[#32353C] p-1 rounded-sm text-lightgrey w-min' onClick={()=> navigate("..")}>
                <MdOutlineArrowBack  />
            </div>
            <div className='rounded-sm'>
                <img src={image} className='w-8 h-8 md:w-10 md:h-10' />
            </div>
            <div className='grow flex gap-2 justify-between'>
                <div>
                    <h2 className='text-white text-sm md:text-base'>{name}</h2>
                    <p className={'text-[9px] md:text-[12px] text-lightgrey font-light uppercase flex gap-2 items-center'}><span className='hidden md:block'>{bio}</span> <span className='hidden md:block'>•</span> <span>{active ? "Active now" : "Offline"}</span></p>
                </div>
                <div className='flex gap-2 md:gap-4 justify-center items-center text-white text-lg md:text-2xl'>
                    <MdOutlineVideocam />
                    <MdOutlineInfo />
                </div>
            </div>
        </div>
    )
}

const DefaultConvoBox = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='hidden lg:flex flex-col gap-3 items-center justify-center'>
                <h1 className='text-white'>Select an existing conversation or start a new one.</h1>
                <button className='w-32 px-3 py-1 rounded-sm bg-[#32353C] text-lightgrey'>New Message</button>
            </div>
            <div className='flex-2 lg:hidden flex flex-col p-4 md:p-8 bg-[#191C22]'>
                <h1 className='text-lg md:text-xl font-semibold text-white mb-2 md:mb-4'>Messages</h1>
                <div className='flex items-center text-lightgrey gap-2 rounded-sm mb-2 md:mb-4 p-2 bg-[#32353C]'>
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
        </>
    )
}

const ConvoBox = () => {
    const { id } = useParams();
    const convo = data.find(convo => convo.id === id)


    return (
        <>
            <MessageTopBar name={convo.name} bio={convo.bio} image={convo.image} />
            <div className='grow'>
                {/* CHATS  */}
            </div>
            <div className='bg-[#1D2026] p-2 md:p-4 flex gap-1 md:gap-2 items-center'>
                <div className='bg-[#32353C] p-1 md:p-2 rounded-sm text-lightgrey'>
                    <FaPlus />
                </div>
                <div className='bg-[#32353C] p-1 md:p-2 rounded-sm text-lightgrey'>
                    <FaRegSmile />
                </div>
                <div className='grow bg-[#32353C] p-1 md:p-2 rounded-sm text-lightgrey flex'>
                    <input type='text' className='grow outline-none text-sm md:text-base' placeholder='Type a message...' />
                    <div className='bg-primary p-2 rounded-sm text-blue-800 text-sm md:text-base'>
                        <MdSend />
                    </div>
                </div>
            </div>
        </>)
}

export { ConvoBox, DefaultConvoBox }
