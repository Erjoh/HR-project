import React from 'react';
import Button from "../../components/button";
import Header from "../../components/Layout/Header/header";
import InputCode from "./components/inputCode";


const ConfirmationPage = () => {
    return (
        <div>
            <Header/>
            <div className={'flex justify-center p-32'}>
                <div className={'flex justify-center flex-col gap-14'}>
                    <div className={'flex flex-col gap-14'}>
                        <h3 className={'text-black font-inter text-4xl font-semibold'}>Код подтверждения</h3>
                        <p>
                            Код отправлен на почту
                            <span>
                                {/*`${email}`*/}
                            </span>
                        </p>
                        <div className={'flex gap-4'}>
                            <InputCode/>
                        </div>
                    </div>
                    <Button
                        className={'w-full rounded-full border-2 border-black p-4 shadow-md active:bg-blue-500 active:text-white active:border-blue-500'}>
                        Подтвердить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;