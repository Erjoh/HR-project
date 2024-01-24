import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SignUpState} from "./signUpTypes";

const initialState: SignUpState = {
    isLoading: false,
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
};

const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        addFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload
        },
        addLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload
        },
        addCompanyName: (state, action: PayloadAction<string>) => {
            state.companyName = action.payload
        },
        addSignUpEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        addSignUpPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    }
})

export const {
    addFirstName,
    addLastName,
    addCompanyName,
    addSignUpEmail,
    addSignUpPassword,
} = signUpSlice.actions;

export default signUpSlice.reducer;