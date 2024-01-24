import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store";
import {signUpCompany} from "./signUpCompany";
import {NavigateFunction} from "react-router-dom";
import {signUpEmployee} from "./signUpEmployee";
import {RoleTypes} from "../app/appTypes";

export const useSignUp = () => {
    const role = useSelector((state: RootState) => state.app.role)
    const firstName = useSelector((state: RootState) => state.signUp.firstName)
    const lastName = useSelector((state: RootState) => state.signUp.lastName)
    const companyName = useSelector((state: RootState) => state.signUp.companyName)
    const email = useSelector((state: RootState) => state.signUp.email)
    const password = useSelector((state: RootState) => state.signUp.password)


    const dispatch = useAppDispatch()
    const authSignUp = (navigate: NavigateFunction) => {
        if (role === RoleTypes.COMPANY) {
            dispatch(signUpCompany(companyName, email, password, navigate))
        } else {
            dispatch(signUpEmployee(firstName, lastName, email, password, navigate))
        }
    }
    return {
        firstName,
        lastName,
        companyName,
        email,
        password,
        authSignUp,
    }
}