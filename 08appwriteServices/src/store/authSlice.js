import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    id:1, 
    name :"lucky",
    email:"lucky@gmail.com", 
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        addUser: (state, action)=>{

        },
        deleteUser : (state, action)=>{},
        updateUserInfo : (state, action)=>{}
    }
})
