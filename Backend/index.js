//const express=require('express')
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database.js";
import userroute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import {app, server } from "./socket/socket.js";
dotenv.config({})




const PORT=process.env.PORT||5000;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

const corsOption={
    origin:'http://localhost:3000',
    credentials:true
}

app.use(cors(corsOption))
//Routes

app.use("/api/v1/user",userroute);
//http://localhost:8080/api/v1/user/register
app.use("/api/v1/message",messageRoute)

server.listen(PORT,()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
})