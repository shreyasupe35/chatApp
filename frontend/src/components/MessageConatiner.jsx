import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';

const MessageContainer = () => {
    return (

        <div className='md:min-w-[550px] flex flex-col'>
            <div className='flex gap-2 bg-gray-900 items-center px-4 py-2 mb-2 '>

                <div className="avatar online">
                    <div className='w-12 rounded-full'>
                        <img src="https://static.vecteezy.com/system/resources/previews/014/212/681/original/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-for-website-and-mobile-app-design-illustration-on-a-white-isolated-background-vector.jpg" alt="user profile" />
                    </div>
                </div>


                <div className="">
                    <div className=' flex  gap-2 flex-1'>
                        <p className='' >Shreya</p>
                    </div>
                </div>
            </div>
        <Messages/>
        <SendInput/>
        </div>


    )
}


export default MessageContainer