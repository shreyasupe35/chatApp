import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice.js';

const Login=()=>{
    const dispatch =useDispatch();
    const navigate=useNavigate();
   
    const [user,setUser]=useState({
      
        username:"",
        password:"",
        
    })
    
    const onSubmitHandler=async (e)=>{
        e.preventDefault();
        try {
            const res=await axios.post('http://localhost:8080/api/v1/user/login',user,{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });
           
            navigate("/")
             console.log(res);
            dispatch(setAuthUser(res.data))
           
           } catch (error) {
            toast.error(error.response?.data.message);
            console.log(error);
           }
        setUser({
          
            username:"",
            password:"",
            
        })
    }




    return (
        <div className="min-w-96 mx-auto">
           <div className='w-full p-6 rounded-lg shadow-md bg-gray-200 h-full w-full bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-800'>
            <h1 className='text-3xl font-bold text-center text-gray-800'>Login</h1>
            <form action="" onSubmit={onSubmitHandler}>
               


                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text  text-gray-900 font-semibold'>UserName</span>
                    </label>
                    <input
                    value={user.username}
                    onChange={(e)=>setUser({...user,username:e.target.value})}
                        className='w-full input input-bordered h-10'
                     type="text"placeholder='Username'/>
                </div>


                <div>
                    <label htmlFor="" className='label p-2'>
                        <span className='text-base label-text  text-gray-900 font-semibold'>Password</span>
                    </label>
                    <input
                    value={user.password}
                    onChange={(e)=>setUser({...user,password:e.target.value})}
                        className='w-full input input-bordered h-10'
                     type="password"placeholder='password'/>
                </div>


                
              
                
                    <p className='text-center text-gray-900'>Don't have an account?  <Link to="/register">SignUp</Link></p>
                    
                
                
                <div>
                    <button type="submit" className='btn btn-block btn-sm mt-2 border border-slate-700'> Login</button>
                </div>
            </form>
           </div>
        </div>
    );
}
export default Login;