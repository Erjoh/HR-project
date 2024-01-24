import {NavigateFunction} from "react-router-dom";
import AuthService from "../../../services/AuthService";
import {ROUTES} from "../../../utils/ROUTES";
import {setLoading} from "./signInSlice";

export const signIn = (email: string, password: string, navigate: NavigateFunction) => async (dispatch: any) => {
    setLoading(true)
    try {
        const response = await AuthService.signIn(email, password);
        if (response.status === 200) {
            localStorage.setItem('token', response.data);
            navigate(ROUTES.CONFIRMATION_PAGE)
        }

    } catch (e) {
        console.error(e.response?.data?.message);
    } finally {
        setLoading(false)
    }
};