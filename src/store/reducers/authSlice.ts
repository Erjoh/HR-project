import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from "../../models/IUser";
import AuthService from "../../services/AuthService";

export const signIn = (email: string, password: string) => async (dispatch: any) => {
    try {
        const response = await AuthService.signIn(email, password);
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setAuth(true));
        dispatch(setUser(response.data.user));
    } catch (e) {
        console.error(e.response?.data?.message);
    }
};

export const logout = () => async (dispatch: any) => {
    try {
        const response = await AuthService.logout;
        localStorage.removeItem('token');
        dispatch(setAuth(false));
        dispatch(setUser({} as IUser));
    } catch (e) {
        console.error(e.response?.data?.message);
    }
};

interface AuthState {
    user: IUser;
    isAuth: boolean;
}

const initialState: AuthState = {
    user: {} as IUser,
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        resetAuth: (state) => {
            state.isAuth = false;
            state.user = {} as IUser;
        },
    },
});

export const {setAuth, setUser, resetAuth} = authSlice.actions;

export default authSlice.reducer;