import React from 'react';
import InputCountry from "./inputs/inputCountry";
import InputCity from "./inputs/inputCity";
import InputAddress from "./inputs/inputAddress";

const ContactInformation = () => {
    return (
        <div className={'w-full'}>
            <h3 className={'font-inter text-1xl font-bold gap-4 flex flex-col'}>Контактная информация</h3>
            <div className={'flex gap-4 flex-col'}>
                <InputCountry/>
                <InputCity/>
                <InputAddress/>
            </div>
        </div>
    );
};

export default ContactInformation;