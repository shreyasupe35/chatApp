import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

import axios from "axios";
import toast from "react-hot-toast"



const Signup=()=>{
    const navigate=useNavigate();
    const [user,setUser]=useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:"",
    })

    const handlecheckbox=(gender)=>{
        setUser({...user,gender})
    }

    const onSubmitHandler=async (e)=>{
        e.preventDefault();
       //network call
       try {
        const res=await axios.post(`http://localhost:8080/api/v1/user/register`,user,{
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        });
       if(res.data.success){
        navigate("/login")
        toast.success(res.data.message);

       }
       } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
       }
        setUser({
            fullName:"",
            username:"",
            password:"",
            confirmPassword:"",
            gender:"",
        })
    }
    return (
        <div className="min-w-96 mx-auto">
           <div className='w-full p-6 rounded-lg shadow-md bg-gray-200 h-full w-full bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-800'>
            <h1 className='text-3xl font-bold text-center text-gray-800'>SignUp</h1>
            <form action="" onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text  text-gray-900 font-semibold'>FullName</span>
                    </label>
                    <input value={user.fullName} onChange={(e)=>setUser({...user,fullName:e.target.value})}
                        className='w-full input input-bordered h-10'
                     type="text"placeholder='FullName'/>
                </div>


                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text  text-gray-900 font-semibold'>UserName</span>
                    </label>
                    <input value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}
                        className='w-full input input-bordered h-10'
                     type="text"placeholder='Username'/>
                </div>


                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text  text-gray-900 font-semibold'>Password</span>
                    </label>
                    <input value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}
                        className='w-full input input-bordered h-10'
                     type="password"placeholder='password'/>
                </div>


                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text  text-gray-900 font-semibold'>Confirm Password</span>
                    </label>
                    <input value={user.confirmPassword} onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}
                        className='w-full input input-bordered h-10'
                     type="password"placeholder='confirm password'/>
                </div>
                <div className='flex items-center my-4'>
                    <div className="flex items-center">
                        <p>Male</p>
                        <input  
                        type="checkbox" 
                        
                        checked={user.gender==="male"}
                        onChange={()=>handlecheckbox("male")}
                        className="checkbox checkbox-primary mx-2" />
                    </div>
                    <div className="flex items-center">
                        <p>Female</p>
                        <input  
                        type="checkbox" 
                        checked={user.gender==="female"}
                        onChange={()=>handlecheckbox("female")}
                       
                        className="checkbox checkbox-primary mx-2" />
                    </div>
                </div>
                
                    <p className='text-center'>Already have an account?  <Link to="/login">Login</Link></p>
                    
                
                
                <div>
                    <button type="submit" className='btn btn-block btn-sm mt-2 border border-slate-700'> SignUp</button>
                </div>
            </form>
           </div>
        </div>
    );
}
export default Signup;