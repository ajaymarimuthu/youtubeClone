import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_CHAT_VALUE } from "./constants";


const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{

        addMessage:(state,action)=>{
            state.messages.splice(OFFSET_CHAT_VALUE,1)
            state.messages.unshift(action.payload);
        },

        deleteMessages:(state)=>{
            state.messages=[]
        },


    }
})

export const {addMessage,deleteMessages} =chatSlice.actions


export default chatSlice.reducer;