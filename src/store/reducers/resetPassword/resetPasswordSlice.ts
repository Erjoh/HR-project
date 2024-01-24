import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// import $api, {API_URL} from "../../../http";

interface ResetPasswordState {
    email: string,
    password: string,
    repeatPassword: string,
    isLoading: boolean,
    error: string,
}

const initialState: ResetPasswordState = {
    email: '',
    password: '',
    repeatPassword: '',
    isLoading: false,
    error: null,
};

// export const sendResetPasswordData = createAsyncThunk(
//     'resetPassword/sendResetPasswordData',
//     async (email: string) => {
//         // const response = await $api.post(, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({email}),
//         });
//
//         return response.json();
//     }
// );

const resetPasswordSlice = createSlice({
    name: 'reset',
    initialState,
    reducers: {
        addEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        addResetPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        addRepeatResetPassword: (state, action: PayloadAction<string>) => {
            state.repeatPassword = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(sendResetPasswordData.pending, (state) => {
    //             state.isLoading = true;
    //             state.error = null;
    //         })
    //         .addCase(sendResetPasswordData.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(sendResetPasswordData.rejected, (state, action) => {
    //             state.isLoading = false;
    //             if (action.payload) {
    //                 state.error = action.payload as string;
    //             } else if (action.error) {
    //                 state.error = action.error.message as string;
    //             } else {
    //                 state.error = "Произошла ошибка при отправке запроса.";
    //             }
    //         });
    // },
});

export const {
    addEmail,
    addResetPassword,
    addRepeatResetPassword,
} = resetPasswordSlice.actions;

export default resetPasswordSlice.reducer;