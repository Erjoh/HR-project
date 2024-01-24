import {configureStore} from "@reduxjs/toolkit";
import signInReducer from './reducers/signIn/signInSlice'
import vacancyReducer from './reducers/createVacancy/vacancySlice'
import signUpReducer from './reducers/signUp/signUpSlice'
import appReducer from './reducers/app/appSlice'
import dropdownReducer from './reducers/dropdownAccount/dropdownSlice'
import {useDispatch} from "react-redux";

const store = configureStore({
    reducer: {
        signIn: signInReducer,
        vacancy: vacancyReducer,
        signUp: signUpReducer,
        app: appReducer,
        dropdown: dropdownReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store;