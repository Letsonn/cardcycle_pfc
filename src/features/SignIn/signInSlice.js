import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: 'password doesent save the state',
    error: ''
}

export const signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        typeEmail: (state, value) => {
            state.email = value;
        },
        typePassword: (state, value) => {
            state.password = value;
        }
    }
});

export const selectEmail = (state) => state.signIn.email;
export const selectPassword = (state) => state.signIn.password;


export const { typeEmail, typePassword } = signInSlice.actions;

export default signInSlice.reducer;