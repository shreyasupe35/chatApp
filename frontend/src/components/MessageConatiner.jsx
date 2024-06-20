import React, { useEffect } from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
import { useDispatch, useSelector } from 'react-redux';
import { setselectedUser } from '../redux/userSlice';

const MessageContainer = () => {
    const {selectedUser,authUser,onlineUsers}=useSelector(store=> store.user);
    const dispatch=useDispatch();
    // useEffect(()=>{
    //     //cleaning the selected user
    //     return ()=> dispatch(setselectedUser(null))
    // },[])
    const isOnline=onlineUsers?.includes(selectedUser?._id);
    return (
        <>
        {selectedUser !== null?(
             <div className='md:min-w-[550px] flex flex-col'>
             <div className='flex gap-2 bg-gray-900 items-center px-4 py-2 mb-2 '>
 
                 <div className={`avatar ${isOnline?'online':''}`}>
                     <div className='w-12 rounded-full'>
                         <img src={selectedUser?.profilePhoto} alt="user profile" />
                     </div>
                 </div>
 
 
                 <div className="">
                     <div className=' flex  gap-2 flex-1'>
                         <p className='' >{selectedUser?.fullName}</p>
                     </div>
                 </div>
             </div>
         <Messages/>
         <SendInput/>
         </div>

        ):(
            <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-semibold text-white'>Hi,{authUser?.fullName}</h1>
                <h1 className='text-2xl text-white'>Let's start the conversation</h1>
            </div>
            
        )}
        </>
       


    )
}


export default MessageContainer