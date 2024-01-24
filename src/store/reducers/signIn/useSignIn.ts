import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store";
import {NavigateFunction} from "react-router-dom";
import {signIn} from "./signIn";

export const useSignIn = () => {
    const email = useSelector((state: RootState) => state.signIn.email)
    const password = useSelector((state: RootState) => state.signIn.password)
    const dispatch = useAppDispatch()
    const authSignIn = (navigate: NavigateFunction) => {
        dispatch(signIn(email, password, navigate))
    }

    return {
        email,
        password,
        authSignIn
    };
};
