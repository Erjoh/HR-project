import React from 'react';
import MagnifierIcon from "./Icons/magnifierIcon";

const InputJobSearch = () => {
    return (
        <div className={'flex rounded-full p-2 w-2/5 bg-white justify-between'}>
            <div className={'flex items-center'}>
                <span>
                    <MagnifierIcon/>
                </span>
                <input className={'outline-none'} placeholder={'Какую работу ищете?'} type="text"/>
            </div>

            <button className={'border bg-custom-500 text-white rounded-full p-3 px-12'}>Поиск</button>
        </div>
    );
};

export default InputJobSearch;