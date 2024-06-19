import React from 'react'
import MessageContainer from './MessageConatiner';
import Sidebar from './Sidebar';



const HomePage=()=>{
 return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden  bg-gray-200  bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-800'>
        <Sidebar/>
        <MessageContainer/>
    </div>
 )

}

export default HomePage;