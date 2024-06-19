import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setselectedUser } from '../redux/userSlice';

const OtherUser = (props) => {
    const  user=props.user;
    const dispatch =useDispatch();

    const {selectedUser} =useSelector(store=>store.user)
    const selectedUserHandler =(user)=>{
        console.log(user);
        dispatch(setselectedUser(user))
    }
    return (
        <>
            <div onClick={()=>selectedUserHandler(user)} className={`${selectedUser?._id===user?._id ? 'bg-gray-400 text-black':'text-white'} flex gap-2 text-black items-center hover:bg-gray-400 rounded p-2 cursor-pointer`}>
               
                    <div className="avatar online">
                        <div className='w-12 rounded-full'>
                            <img src={user?.profilePhoto} alt="user profile" />
                        </div>
                    </div>
              

                    <div className="">
                        <div className=' flex  gap-2 flex-1'>
                           <p >{user?.fullName}</p>
                        </div>
                    </div> 
            </div>
            <div className="divider my-0 py-0 h-1 "></div>
        </>
    )
}
export default OtherUser;