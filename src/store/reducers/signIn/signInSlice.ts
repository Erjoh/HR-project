import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SignInState} from "./signInTypes";

const initialState: SignInState = {
    isLoading: false,
    role: '',
    email: '',
    password: '',
};

const signInSlice = createSlice({
    name: 'signIn',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        addSignInEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        addSignInPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    // extraReducers: (builder) => {
    // }
});

export const {
    setLoading,
    addSignInEmail,
    addSignInPassword,
} = signInSlice.actions;

export default signInSlice.reducer;