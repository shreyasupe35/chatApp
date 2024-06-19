import React from 'react';
import { LuSendHorizonal } from "react-icons/lu";
const SendInput=()=>{
    return (
        <form action="" className='px-4 my-3'>
            <div className='w-full relative '>
                <input type="text"
                placeholder='Send a message ...' 
                className='border p-3 border-gray-700 text-sm rounded-lg block w-full bg-gray-900 text-white'/>
                <button className='absolute flex inset-y-0 end-0 pr-4 items-center'><LuSendHorizonal /></button>
             </div>
        </form>
    )
}

export default SendInput