import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

import axios from 'axios';
import toast from "react-hot-toast"
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setOtherUsers } from '../redux/userSlice';
import OtherUsers1 from './OtherUsers1';


const Sidebar = () => {
    const [search,setSearch]=useState("");
    const navigate=useNavigate();
    const {OtherUsers} =useSelector(store=>store.user)
    const dispatch=useDispatch();
    const logoutHandler=async ()=>{
        try {
           
            const res= await axios.get(`http://localhost:8080/api/v1/user/logout`)
            navigate("/login");
            toast.success(res.data.message);
            dispatch(setAuthUser(null))
        } catch (error) {
            console.log(error);
        }
    }

    const searchSubmitHandler=(e)=>{
        e.preventDefault();
        
        const conversationUser= OtherUsers?.find((user)=>user.fullName.toLowerCase().includes(search.toLowerCase()))
        
        if(conversationUser){
            dispatch(setOtherUsers([conversationUser]));
        }else{
            toast.error("User not found!");
        }
    }

    return (
        <div className='border-r border-slate-900 p-4 flex flex-col'>
            <form onSubmit={searchSubmitHandler} className='flex items-center gap-0.5'>
                <input 
                    value={search}
                    type="text"
                    onChange={(e)=>setSearch(e.target.value)}
                    className='input input-bordered rounded-md'
                    placeholder='Search...' />

                <button type='submit' className='btn input-bordered  hover:bg-slate-700 transition-all ease-in-out  duration-300'><IoSearch className='w-6 h-6 outline-none' /></button>
            </form>
            <div className="divider px-3 "></div>

            <OtherUsers1/>
            <div className='mt-2'>
                <button onClick={logoutHandler} className='btn btn-sm '>Logout</button>
            </div>
           
        </div>
    )
}


export default Sidebar;