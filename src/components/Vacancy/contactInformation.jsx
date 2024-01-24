import React from 'react';

const ContactInformation = () => {
    return (
        <div className={'w-full flex gap-4 flex-col'}>
            <select className={'p-4 bg-white border border-gray rounded'} name="position" id="position">
                <option value="" disabled selected hidden>-Выберите-</option>
                <option value="">Бухгалтер</option>
            </select>
            <select className={'p-4 bg-white border border-gray rounded'} name="position" id="position">
                <option value="" disabled selected hidden>-Выберите-</option>
                <option value="">Бухгалтер</option>
            </select>
            <input className={'border border-gray p-4 rounded'} type="text"/>
        </div>
    );
};

export default ContactInformation;