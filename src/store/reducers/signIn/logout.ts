import AuthService from "../../../services/AuthService";
import {setLoading} from "./signInSlice";

export const logout = () => async (dispatch: any) => {
    setLoading(true)
    try {
        const response = await AuthService.logout;
        localStorage.removeItem('token');
    } catch (e) {
        console.error(e.response?.data?.message);
    } finally {
        setLoading(false)
    }
};