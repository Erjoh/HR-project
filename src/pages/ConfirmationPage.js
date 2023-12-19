import React from 'react';
import Layout from "../components/layout";
import Button from "../components/button";
import InputNumber from "../components/inputNumber";
import InputCode from "../components/inputCode";

const ConfirmationPage = () => {
    return (
        <Layout>
            <div className={'flex justify-center'}>
                <div className={'flex justify-center flex-col'}>
                    <div className={'flex flex-col'}>
                        <h3>Код подтверждения </h3>
                        <p>
                            Код отправлен на почту <span>nickname@mail.com</span>
                        </p>
                        <div>
                            <InputCode />
                            <InputCode />
                            <InputCode />
                            <InputCode />
                            <InputCode />
                            <InputCode />
                        </div>
                    </div>
                    <Button name={'Подтвердить'}/>
                </div>
            </div>
        </Layout>
    );
};

export default ConfirmationPage;