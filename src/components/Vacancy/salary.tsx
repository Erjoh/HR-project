import React from 'react';
import SelectTypeOfSalary from "./selects/selectTypeOfSalary";
import InputFirstPrice from "./inputs/inputFirstPrice";
import InputLastPrice from "./inputs/inputLastPrice";
import SelectCurrency from "./selects/selectCurrency";

const Salary = () => {
    return (
        <div>
            <h3 className={'font-inter text-1xl font-bold'}>Оклад
                <span
                    className={'text-red-600'}>*
                    </span>
            </h3>
            <div className={'gap-4 flex'}>
                <SelectTypeOfSalary/>
                <InputFirstPrice/>
                <InputLastPrice/>
                <SelectCurrency/>
            </div>
        </div>
    );
};

export default Salary;