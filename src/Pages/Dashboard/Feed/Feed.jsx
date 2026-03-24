import React, { useState } from 'react'
import { FaCode, FaUserCircle } from 'react-icons/fa'
import { MdOutlineImage, MdOutlinePoll } from "react-icons/md";
import Post from '../../../components/Post';



const Feed = () => {

  const [selectedFilter, setSelectedFilter] = useState("latestPosts")

  const handleTextareaChange = (e) =>{
    let textarea = e.target;
    textarea.style.height = "auto"
    textarea.style.height = textarea.scrollHeight + "px"    
  }

  return (
    <div className='flex'>
      <div className='flex-5 min-h-screen p-5 pt-22'>
        {/* post text box */}
        <div className='flex gap-4 rounded-md bg-[#191C22] p-5'>
          <div className='text-white text-4xl'>
            <FaUserCircle />
          </div>
          <div className='grow'>
            <textarea className='w-full h-20 resize-none outline-none text-white placeholder:opacity-70 p-1' placeholder='Share an architectural insight or a snippet...' onChange={handleTextareaChange} />
            <div className='flex gap-2 justify-between items-center mt-2'>
              <div className='flex items-center gap-3'>
                <div className='flex gap-1 justify-center items-center text-lightgrey text-sm cursor-pointer'><span><FaCode /></span><span>SNIPPET</span></div>
                <div className='flex gap-1 justify-center items-center text-lightgrey text-sm cursor-pointer'><span><MdOutlineImage /></span><span>MEDIA</span></div>
                <div className='flex gap-1 justify-center items-center text-lightgrey text-sm cursor-pointer'><span><MdOutlinePoll /></span><span>POLL</span></div>
              </div>
              <button className='px-4 py-2 bg-primary text-sm font-semibold rounded-sm'>Publish</button>
            </div>
          </div>
        </div>

        {/* filters */}
        <div className='my-6 flex gap-3'>
          <button onClick={()=> setSelectedFilter("latestPosts")} className={`px-4 py-2 ${selectedFilter === 'latestPosts' ? "bg-[#4B4DD8]" : "bg-[#32353C]"} text-white text-sm font-semibold rounded-full`}>Latest Posts</button>
          <button onClick={()=> setSelectedFilter("trending")} className={`px-4 py-2 ${selectedFilter === 'trending' ? "bg-[#4B4DD8]" : "bg-[#32353C]"} text-white text-sm font-semibold rounded-full`}>Trending</button>
          <button onClick={()=> setSelectedFilter("jobBoard")} className={`px-4 py-2 ${selectedFilter === 'jobBoard' ? "bg-[#4B4DD8]" : "bg-[#32353C]"} text-white text-sm font-semibold rounded-full`}>Job Board</button>
          <button onClick={()=> setSelectedFilter("showcase")} className={`px-4 py-2 ${selectedFilter === 'showcase' ? "bg-[#4B4DD8]" : "bg-[#32353C]"} text-white text-sm font-semibold rounded-full`}>Showcase</button>
        </div>

        {/* posts */}
        <Post />


      </div>
      <div className='flex-2 bg-dark min-h-screen pt-20'>jdsj</div>
    </div>
  )
}

export default Feed
