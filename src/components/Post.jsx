import React from 'react'
import { FaUserCircle, FaChevronUp } from 'react-icons/fa'
import { MdOutlineModeComment, MdOutlineShare } from "react-icons/md";



const Post = () => {
    return (
        <div className='bg-[#191C22] flex flex-col gap-2 p-4'>
            <div className='flex gap-2 text-lightgrey'>
                <div className='text-white text-4xl'>
                    <FaUserCircle />
                </div>
                <div className='grow'>
                    <h3 className='text-white font-semibold'>Alex Rivera</h3>
                    <p className='text-xs text-lightgrey font-light'> <span>Principal Engineer @FinTech</span> <span> • </span> <span>2h ago</span></p>
                </div>
                <div>
                    <FaChevronUp />
                </div>
            </div>
            <div className='grow'>
                <p className='text-white font-light'>Optimizing our Redis caching layer for high-concurrency event streams. Saw
                    a 45% reduction in latency by switching to a tiered strategy. Here's the core
                    implementation of the custom eviction policy:</p>

            </div>
            <div className='flex justify-between gap-2'>
                <div className='flex gap-4 items-center justify-center text-lightgrey'>
                    <div className='flex gap-1 items-center justify-center'><FaChevronUp /> 1.2k</div>
                    <div className='flex gap-1 items-center justify-center'><MdOutlineModeComment /> 48</div>
                    <div className='flex gap-1 items-center justify-center'><MdOutlineShare /></div>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <div className='p-2 bg-[#1D2026] text-semibold text-lightgrey text-xs'>ARCHITECHTURE</div>
                    <div className='p-2 bg-[#1D2026] text-semibold text-lightgrey text-xs'>REDIS</div>
                </div>
            </div>
        </div>
    )
}

export default Post
