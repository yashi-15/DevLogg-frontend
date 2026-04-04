import React, { useState } from 'react'
import Post from '../../../components/Post';
import PostTextBox from '../../../components/PostTextBox';

const Feed = () => {

  const [selectedFilter, setSelectedFilter] = useState("latestPosts")

  return (
    <div className='flex'>
      <div className='flex-5 min-h-screen p-5'>
        {/* post text box */}
        <PostTextBox />

        {/* filters */}
        <div className='my-6 flex gap-1 md:gap-3'>
          <button onClick={()=> setSelectedFilter("latestPosts")} className={`px-4 py-2 ${selectedFilter === 'latestPosts' ? "bg-[#4B4DD8]" : "bg-[#32353C]"} text-white text-xs md:text-sm font-medium md:font-semibold rounded-full`}>Latest Posts</button>
          <button onClick={()=> setSelectedFilter("trending")} className={`px-4 py-2 ${selectedFilter === 'trending' ? "bg-[#4B4DD8]" : "bg-[#32353C]"} text-white text-xs md:text-sm font-medium md:font-semibold rounded-full`}>Trending</button>
          <button onClick={()=> setSelectedFilter("jobBoard")} className={`px-4 py-2 ${selectedFilter === 'jobBoard' ? "bg-[#4B4DD8]" : "bg-[#32353C]"} text-white text-xs md:text-sm font-medium md:font-semibold rounded-full`}>Job Board</button>
          <button onClick={()=> setSelectedFilter("showcase")} className={`px-4 py-2 ${selectedFilter === 'showcase' ? "bg-[#4B4DD8]" : "bg-[#32353C]"} text-white text-xs md:text-sm font-medium md:font-semibold rounded-full`}>Showcase</button>
        </div>

        <div className='flex flex-col gap-2'>
        {/* posts */}
        <Post />
        <Post />
        <Post />
        <Post />
        </div>


      </div>
      <div className='hidden md:block flex-2 bg-dark min-h-screen pt-20'>jdsj</div>
    </div>
  )
}

export default Feed
