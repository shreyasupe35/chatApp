import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector } from 'react-redux';

const MessageContainer = () => {
    const {selectedUser}=useSelector(store=> store.user);
    return (

        <div className='md:min-w-[550px] flex flex-col'>
            <div className='flex gap-2 bg-gray-900 items-center px-4 py-2 mb-2 '>

                <div className="avatar online">
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


    )
}


export default MessageContainer