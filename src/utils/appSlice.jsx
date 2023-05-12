import { createSlice } from "@reduxjs/toolkit";

const initialState={
  isMenuOpen:true
}

const appSlice=createSlice({
    name:"app",
    initialState: initialState,

    reducers:{
        toggelMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        }
    }

})


export const {toggelMenu}=appSlice.actions;

export default appSlice.reducer