import $api from "../http";
import {AxiosResponse} from "axios";
import {VacancyState} from "../store/reducers/createVacancy/vacancyTypes";

export default class AuthService {
    static async signIn(email: string, password: string): Promise<AxiosResponse> {
        return $api.post('/user/signIn', {email, password});
    }

    static async signUpCompany(companyName: string, email: string, password: string): Promise<AxiosResponse> {
        return $api.post('/company/signUp', {companyName, email, password});
    }

    static async signUpEmployee(firstName: string, lastName: string, email: string, password: string): Promise<AxiosResponse> {
        return $api.post('/employee/signUp', {firstName, lastName, email, password});
    }

    static async signUpUserConfirmEmail(email: string): Promise<AxiosResponse> {
        return $api.post('/api/user/confirmEmail', {email});
    }

    static async signUpUserConfirmCode(code: string): Promise<AxiosResponse> {
        return $api.post('/api/user/confirmCode', {code});
    }

    static async resetPassword(password: string, repeatPassword: string): Promise<AxiosResponse> {
        return $api.post('/api/user/forgotPassword', {password, repeatPassword});
    }

    static async createVacancy(vacancy: VacancyState): Promise<AxiosResponse> {
        return $api.post('/api/vacancy/create', {...vacancy});
    }

    static async logout(): Promise<void> {
        return $api.post('/logout');
    }
}
