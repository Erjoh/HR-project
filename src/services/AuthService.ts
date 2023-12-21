import $api from "../http";
import {AuthResponse} from "../models/responce/AuthResponse";
import {AxiosResponse} from "axios";

export default class AuthService {
    static async signIn(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/signIn', {email, password});
    }

    static async signUp(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/signUp', {email, password});
    }

    static async logout(): Promise<void> {
        return $api.post('/logout');
    }
}
