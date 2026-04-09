import React, { useState } from 'react'
import { FaCode, FaUserCircle } from 'react-icons/fa'
import { MdDeleteOutline, MdOutlineImage, MdOutlinePoll } from 'react-icons/md';
import { uploadFileInCloudinary } from '../api/uploadFileCloudinary';
import { notify, notifyLoading, stopLoadingToast } from '../utils/toast/toaster';

const PostTextBox = () => {

    const [post, setPost] = useState({
        content: "",
        image: null
    })

    const handleImageChange = async (e) => {
        let file = e.target.files[0]
        notifyLoading("Uploading...")
        try {
            const result = await uploadFileInCloudinary(file)
            stopLoadingToast()
            notify('success', "Uploaded!")
            setPost({ ...post, image: result })
        } catch (error) {
            stopLoadingToast()
            notify('error', "Failed to Upload Image.")
        }
    }

    const handleDeleteImage = async () => {
        if (!imgData?.public_id) return
        try {
            await axios.delete(`/api/cloudinary/delete`, {
                data: { public_id: imgData.public_id }
            })
            setPost({ ...post, image: null })
        } catch (error) {
            notify('error', "Failed to delete image.")
            setPost({ ...post, image: null })
        }
    }

    const publishPost = async () => {
        console.log(post);
        console.log(text);
        
    }

    const handleTextareaChange = (e) => {
        let textarea = e.target;
        textarea.style.height = "auto"
        textarea.style.height = textarea.scrollHeight + "px"
    }


    return (
        <div className='flex gap-4 rounded-md bg-[#191C22] p-5'>
            <div className='text-white text-4xl'>
                <FaUserCircle />
            </div>
            <div className='grow'>
                <textarea value={post.content} onChangeCapture={(e) => setPost({ ...post, content: e.target.value })} className='w-full h-20 resize-none outline-none text-white placeholder:opacity-70 p-1' placeholder='Share an architectural insight or a snippet...' onChange={handleTextareaChange} />
                {/* <textarea value={text} onChangeCapture={(e) => setText(e.target.value)} className='w-full h-20 resize-none outline-none text-white placeholder:opacity-70 p-1' placeholder='Share an architectural insight or a snippet...' onChange={handleTextareaChange} /> */}
                {post.image && <div className='relative w-full'>
                    <div className='absolute top-0 right-0 text-white z-10 p-2 rounded-full bg-dark' onClick={handleDeleteImage}>
                        <MdDeleteOutline />
                    </div>
                    <img src={post.image.secure_url} className='w-full' />
                </div>}
                <div className='flex gap-2 justify-between items-center mt-2'>
                    <div className='flex items-center gap-3'>
                        <div className='flex gap-1 justify-center items-center text-lightgrey text-xs md:text-sm cursor-pointer'><span><FaCode /></span><span>SNIPPET</span></div>
                        <label htmlFor='uploadImage' className='flex gap-1 justify-center items-center text-lightgrey text-xs md:text-sm cursor-pointer'><span><MdOutlineImage /></span><span>MEDIA</span><input id='uploadImage' type='file' accept='.png, .jpg, .jpeg' onChange={handleImageChange} hidden /> </label>
                        <div className='flex gap-1 justify-center items-center text-lightgrey text-xs md:text-sm cursor-pointer'><span><MdOutlinePoll /></span><span>POLL</span></div>
                    </div>
                    <button onClick={publishPost} className='px-2 py-1 md:px-4 md:py-2 bg-primary text-sm font-semibold rounded-sm'>Publish</button>
                </div>
            </div>
        </div>
    )
}

export default PostTextBox
