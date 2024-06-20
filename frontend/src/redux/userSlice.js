import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        authUser:null,
        OtherUsers:null,
        selectedUser:null,
        onlineUsers:null,
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.authUser=action.payload;
        },
        setOtherUsers:(state,action)=>{
            state.OtherUsers=action.payload;
        },
        setselectedUser:(state,action)=>{
            state.selectedUser=action.payload;
        },
        setonlineUsers:(state,action)=>{
            state.onlineUsers=action.payload;
        }
    }
})

export const {setAuthUser,setOtherUsers,setselectedUser,setonlineUsers}=userSlice.actions;
export default userSlice.reducer;