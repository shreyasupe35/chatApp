import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
const store=configureStore({
    reducer:{
        //keep slice /vessels
        user:userReducer,
    }
});

export default store;