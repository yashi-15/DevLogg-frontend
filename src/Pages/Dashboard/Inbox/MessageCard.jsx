import React from 'react'

const MessageCard = ({ name, text, time, image, unread = false, selectConvo }) => {
  return (
        <div onClick={selectConvo} className='rounded-sm flex gap-4 items-center w-full cursor-pointer hover:bg-[#282a2e] p-2'>
            <div className='rounded-sm'>
                <img src={image} className='w-9 h-9 md:w-13 md:h-13' />
            </div>
            <div className='grow flex gap-2 justify-between'>
                <div>
                    <h2 className='text-white text-sm md:text-base'>{name}</h2>
                    <p className={`text-xs md:text-sm ${unread ? "text-primary font-semibold" : "text-lightgrey font-light"}`}>{text}</p>
                </div>
                <p className='text-[10px] md:text-xs text-lightgrey font-light'>{time}</p>
            </div>
        </div>
    )
}

export default MessageCard
