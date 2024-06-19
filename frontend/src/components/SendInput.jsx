import React, { useState } from 'react';
import { LuSendHorizonal } from "react-icons/lu";
const SendInput=()=>{
    const [message,setmessage]=useState("");
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        alert(message);

    }
    return (

        <form action="" className='px-4 my-3'>
            <div className='w-full relative '>
                <input type="text"
                value={message}
                onChange={(e)=>setmessage(e.target.value)}
                placeholder='Send a message ...' 
                className='border p-3 border-gray-700 text-sm rounded-lg block w-full bg-gray-900 text-white'/>
                <button type="submit" className='absolute flex inset-y-0 end-0 pr-4 items-center'><LuSendHorizonal /></button>
             </div>
        </form>
    )
}

export default SendInput