import {setLoading} from "../app/appSlice";
import AuthService from "../../../services/AuthService";

export const resetPassword = (password: string, repeatPassword: string) => async (dispatch: any) => {
    setLoading(true)
    try {
        const response = await AuthService.resetPassword(password, repeatPassword);
        if (response.status === 200) {
            localStorage.setItem('token', response.data);
        }
    } catch (e) {
        console.error(e.response?.data?.message);
    } finally {
        setLoading(false)
    }
};