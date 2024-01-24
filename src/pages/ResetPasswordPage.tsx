import React, {ChangeEvent} from 'react';
import {Link} from "react-router-dom";
import InputEmail from "./SignFieldsPage/components/inputEmail";
import GoogleIcon from "./SignFieldsPage/Icons/googleIcon";
import LinkedinIcon from "./SignFieldsPage/Icons/linkedinIcon";
import Header from "../components/Layout/Header/header";
import {addEmail} from "../store/reducers/resetPassword/resetPasswordSlice";
import {useDispatch} from "react-redux";
import {ROUTES} from "../utils/ROUTES";


const ResetPasswordPage = () => {
    const dispatch = useDispatch()
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(addEmail(e.target.value))
    }
    return (
        <div>
            <Header/>
            <div className={'container max-w-2xl mx-auto'}>
                <div className={'flex flex-col px-16 pt-16'}>
                    <div>
                        <h3 className='text-black font-inter text-4xl font-semibold'>Забыли пароль?</h3>
                        <p className='pt-5 pb-10'>Пожалуйста, подтвердите свой адрес электронной почты ниже, и мы вышлем
                            вам проверочный код</p>
                    </div>
                    <InputEmail onChange={handleEmail} placeholder={'Электронная почта'}/>
                    <div className={'flex flex-col gap-4 py-10'}>
                        <Link
                            className="text-center rounded-full border-2 border-black p-4 shadow-md hover:bg-blue-500 hover:text-white hover:border-blue-500"
                            to={'/newPassword'}>
                            Продолжить
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
                    <div className='p-20 flex justify-center'>
                        <Link to={ROUTES.SIGN_IN}>У вас уже есть аккаунт? <span className='font-bold'>Войти</span></Link>
                    </div>
                </div>
            </div>
        </div>)
};

export default ResetPasswordPage;