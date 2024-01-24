import React, {ChangeEvent} from 'react';
import {Link} from "react-router-dom";
import GoogleIcon from "./SignFieldsPage/Icons/googleIcon";
import LinkedinIcon from "./SignFieldsPage/Icons/linkedinIcon";
import InputPassword from "./SignFieldsPage/components/inputPassword";
import Header from "../components/Layout/Header/header";
import {useDispatch} from "react-redux";
import {addRepeatResetPassword, addResetPassword} from "../store/reducers/resetPassword/resetPasswordSlice";
import {ROUTES} from "../utils/ROUTES";

const CreateNewPasswordPage = () => {
    const dispatch = useDispatch()
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addResetPassword(e.target.value))
    }
    const handleRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addRepeatResetPassword(e.target.value))
    }
    return (
        <div>
            <Header/>
            <div className={'container max-w-2xl mx-auto'}>
                <div className={'flex flex-col px-16 pt-8 pb-8 gap-4'}>
                    <div>
                        <h3 className='text-black font-inter text-4xl font-semibold py-8'>Создайте пароль</h3>
                    </div>
                    <InputPassword onChange={handlePassword} placeholder={'Новый пароль'}/>
                    <InputPassword onChange={handleRepeatPassword} placeholder={'Повторите пароль'}/>
                    <div className={'flex flex-col gap-4 py-10'}>
                        <button
                            className="rounded-full border-2 border-black p-4 shadow-md hover:bg-blue-500 hover:text-white hover:border-blue-500">Продолжить
                        </button>
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
                    <div className='p-20 flex justify-center'>
                        <Link to={ROUTES.SIGN_IN}>У вас уже есть аккаунт? <span className='font-bold'>Войти</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNewPasswordPage;