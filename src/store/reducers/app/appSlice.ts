import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState, RoleTypes} from "./appTypes";

const initialState: AppState = {
    isLoading: false,
    role: RoleTypes.NULL,
    isAuth: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setRole: (state, action: PayloadAction<RoleTypes>) => {
            state.role = action.payload
        },
        isAuthed: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
    },
    // extraReducers: (builder) => {
    // }
});

export const {
    setLoading,
    setRole,
    isAuthed,
} = appSlice.actions;

export default appSlice.reducer;