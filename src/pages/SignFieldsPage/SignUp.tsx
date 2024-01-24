import React, {} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Button from "../../components/button";
import Company from "./components/company";
import Employee from "./components/employee";
import GoogleIcon from "./Icons/googleIcon";
import LinkedinIcon from "./Icons/linkedinIcon";
import Header from "../../components/Layout/Header/header";
import {useAppSlice} from "../../store/reducers/app/useAppSlice";
import {RoleTypes} from '../../store/reducers/app/appTypes';
import {ROUTES} from "../../utils/ROUTES";
import {useSignUp} from "../../store/reducers/signUp/useSignUp";


const SignUp = () => {
    const navigate = useNavigate()
    const {authSignUp} = useSignUp()
    const {role, setAuthRole} = useAppSlice()
    const handleSignUp = () => {
        authSignUp(navigate)
    }

    const handleButtonClick = (value: RoleTypes) => {
        if (value === RoleTypes.COMPANY) {
            if (role === RoleTypes.COMPANY) {
                setAuthRole(RoleTypes.NULL)
            } else {
                setAuthRole(RoleTypes.COMPANY)
            }

        } else if (value === RoleTypes.EMPLOYEE) {
            if (role === RoleTypes.EMPLOYEE) {
                setAuthRole(RoleTypes.NULL)
            } else {
                setAuthRole(RoleTypes.EMPLOYEE)
            }
        }
    }

    return (
        <div>
            <Header/>
            <div className="container sm:mx-auto">
                <div className='flex flex-col py-16 items-center'>
                    <div className='flex flex-col'>
                        <h3 className='text-black font-inter text-4xl font-semibold'>Создайте аккаунт</h3>
                        <p className='pt-20 pb-10'>Выберите роль:</p>
                        <div className='flex gap-6'>
                            <Button
                                className={`py-6 px-20 rounded-md shadow-md h-16 flex-shrink-0 flex items-center ${role === RoleTypes.EMPLOYEE ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
                                onClick={() => handleButtonClick(RoleTypes.EMPLOYEE)}>
                                Я соискатель
                            </Button>
                            <Button
                                className={`p-6 pl-16 pr-16 rounded-md shadow-md h-16 flex-shrink-0 flex items-center ${role === RoleTypes.COMPANY ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
                                onClick={() => handleButtonClick(RoleTypes.COMPANY)}>
                                Я работодатель
                            </Button>
                        </div>
                        {role === RoleTypes.EMPLOYEE && <Employee/>}
                        {role === RoleTypes.COMPANY && <Company/>}
                        {role !== RoleTypes.NULL && (
                            <div className='mt-6 flex flex-col gap-6'>
                                <Link
                                    to={ROUTES.CONFIRMATION_PAGE}
                                    onClick={handleSignUp}
                                    className="text-center rounded-full border-2 border-black p-4 shadow-md hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                    Создать аккаунт
                                </Link>
                                <Link to={'https://www.google.com/'}
                                      className="rounded-full border-2 border-black p-4 shadow-md flex items-center justify-center gap-4 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                    <span>
                                        <GoogleIcon/>
                                    </span>
                                    Продолжить с Google
                                </Link>
                                <Link to={'https://www.linkedin.com/'}
                                      className="rounded-full border-2 border-black p-4 shadow-md flex items-center justify-center gap-4 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                    <span>
                                        <LinkedinIcon/>
                                    </span>
                                    Продолжить с LinkedIn
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className='p-20'>
                        <Link to={ROUTES.SIGN_IN}>У вас уже есть аккаунт? <span className='font-bold'>Войти</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;