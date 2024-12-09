import { createSlice } from '@reduxjs/toolkit'



const initialState={
    accessToken:'',
    refreshToken:''
}

export const tokenSlice=createSlice({
    name:'token',
    initialState,
    reducers:{
        setToken:(state,action)=>{
            console.log(action)
            state.accessToken=action.payload.accessToken;
            state.refreshToken=action.payload.refreshToken;
            console.log('in store access',state.accessToken);
            console.log('in store refresh',state.refreshToken)
            
        }
    }   
})
export const {setToken}=tokenSlice.actions;

export default tokenSlice.reducer;