import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accessToken: localStorage.getItem('accessToken') || '',
    refreshToken: localStorage.getItem('refreshToken') || '',
    user: JSON.parse(localStorage.getItem('user')) || {}
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.user = action.payload.user;
            // localStorage में भी store करें
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('refreshToken', action.payload.refreshToken);
            localStorage.setItem('user', JSON.stringify(action.payload.user));
        },
        clearToken: (state) => {
            state.accessToken = '';
            state.refreshToken = '';
            state.user = {};
            
            // localStorage से भी clear करें
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
        }
    }
})

export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;