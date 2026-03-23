import React, { useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { MdLockOutline, MdMailOutline, MdTerminal } from 'react-icons/md'

const SignIn = () => {

    const [newAccount, setNewAccount] = useState(false)

    return (
        <div className='h-screen max-w-[80%] mx-auto flex flex-col gap-2 items-center justify-center'>
            <div className='min-w-120'>
                <div className='text-primary text-center'>
                    <div className='w-min p-2 rounded-sm mx-auto text-3xl bg-[#272A31]'>
                        <MdTerminal />
                    </div>
                    <h1 className='mt-4 mb-2 text-3xl font-semibold'>DevLogg</h1>
                    <p className='text-lightgrey mb-8'>Design. Connect. Build. Ship.</p>
                </div>
                <div className='bg-[#191C22]'>
                    <div className='flex border-b border-[#32353C]'>
                        <div className={`flex-1 text-center cursor-pointer p-4 ${!newAccount ? "border-b-2 border-primary text-primary" : "text-lightgrey"}`} onClick={()=> setNewAccount(false)}>Sign In</div>
                        <div className={`flex-1 text-center cursor-pointer p-4 ${newAccount ? "border-b-2 border-primary text-primary" : "text-lightgrey"}`} onClick={()=> setNewAccount(true)}>Create Account</div>
                    </div>
                    <div className='p-8'>
                        <button className='text-white bg-[#32353C] flex gap-2 p-3 w-full items-center justify-center rounded-md'> <span><svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg></span> <span>Sign in with Google</span></button>

                        <p className='text-lightgrey font-light text-xs text-center my-5'>OR CONTINUE WITH</p>

                        {!newAccount ? <div>
                            <div className='my-3'>
                                <p className='text-lightgrey font-light text-xs mb-2'>EMAIL ADDRESS</p>
                                <div className='bg-[#0B0E14] rounded-md flex gap-2 items-center p-3'>
                                    <span className='text-lightgrey'><MdMailOutline /></span>
                                    <input name='email' type='email' placeholder='dev@logg.io' className='text-white focus:outline-none' />
                                </div>
                            </div>
                            <div className='my-3'>
                                <div className='flex gap-2 justify-between items-center'>
                                    <p className='text-lightgrey font-light text-xs mb-2'>PASSWORD</p>
                                    <p className='text-lightgrey font-light text-xs mb-2'>FORGOT?</p>
                                </div>
                                <div className='bg-[#0B0E14] rounded-md flex gap-2 items-center p-3'>
                                    <span className='text-lightgrey'><MdLockOutline /></span>
                                    <input name='password' type='password' placeholder='••••••' className='text-white focus:outline-none' />
                                </div>
                            </div>

                            <button className='px-3 py-2 w-full rounded-md font-semibold bg-linear-to-r from-primary to-secondary text-black my-3'>Sign In to Dashboard</button>
                        </div> : <div>
                            <div className='my-3'>
                                <p className='text-lightgrey font-light text-xs mb-2'>FULL NAME</p>
                                <div className='bg-[#0B0E14] rounded-md flex gap-2 items-center p-3'>
                                    <span className='text-lightgrey'><FaRegUser /></span>
                                    <input name='text' type='name' placeholder='Dev Logg' className='text-white focus:outline-none' />
                                </div>
                            </div>
                            <div className='my-3'>
                                <p className='text-lightgrey font-light text-xs mb-2'>EMAIL ADDRESS</p>
                                <div className='bg-[#0B0E14] rounded-md flex gap-2 items-center p-3'>
                                    <span className='text-lightgrey'><MdMailOutline /></span>
                                    <input name='email' type='email' placeholder='dev@logg.io' className='text-white focus:outline-none' />
                                </div>
                            </div>
                            <div className='my-3'>
                                <div className='flex gap-2 justify-between items-center'>
                                    <p className='text-lightgrey font-light text-xs mb-2'>PASSWORD</p>
                                    <p className='text-lightgrey font-light text-xs mb-2'>FORGOT?</p>
                                </div>
                                <div className='bg-[#0B0E14] rounded-md flex gap-2 items-center p-3'>
                                    <span className='text-lightgrey'><MdLockOutline /></span>
                                    <input name='password' type='password' placeholder='••••••' className='text-white focus:outline-none' />
                                </div>
                            </div>

                            <button className='px-3 py-2 w-full rounded-md font-semibold bg-linear-to-r from-primary to-secondary text-black my-3'>Sign In to Dashboard</button>
                        </div>}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
