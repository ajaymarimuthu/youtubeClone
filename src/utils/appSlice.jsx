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
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        }
    }

})


export const {toggelMenu,closeMenu}=appSlice.actions;

export default appSlice.reducer