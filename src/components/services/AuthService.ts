import $api from "../http";
import {AuthResponce} from "../models/responce/AuthResponce";
import {AxiosResponse} from "axios";

export default class AuthService {
    static async signIn(email: string, password: string): Promise<AxiosResponse<AuthResponce>> {
        return $api.post('/signIn', {email, password})
    }

    static async signUp(email: string, password: string): Promise<AxiosResponse<AuthResponce>> {
        return $api.post('/signUp', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout', )
    }
}
