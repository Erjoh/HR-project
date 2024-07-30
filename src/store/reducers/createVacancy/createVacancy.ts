import {setLoading} from "../app/appSlice";
import AuthService from "../../../services/AuthService";
import {VacancyState} from "./vacancyTypes";

export const createVacancy = (vacancy:VacancyState) => async (dispatch: any) => {
    setLoading(true)
    try {
        const response = await AuthService.createVacancy(vacancy);
        if (response.status === 200) {
            localStorage.setItem('token', response.data);
        }
    } catch (e) {
        console.error(e.response?.data?.message);
    } finally {
        setLoading(false)
    }
};