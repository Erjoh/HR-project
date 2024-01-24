import $api from "../http";
import {AxiosResponse} from "axios";

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

    static async logout(): Promise<void> {
        return $api.post('/logout');
    }
}
