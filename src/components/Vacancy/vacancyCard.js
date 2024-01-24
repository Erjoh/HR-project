import React from 'react';
import InfoBlock from "./blocks/infoBlock";
import LocationIcon from "../Icons/locationIcon";
import BagIcon from "../Icons/bagIcon";
import AboutBlock from "./blocks/aboutBlock";
import PositionBlock from "./blocks/positionBlock";
import ExpBlock from "./blocks/expBlock";

const VacancyCard = ({company, position, salary, experience, workday, location, infotech}) => {
    return (
        <div className='flex justify-center'>
            <div className='max-w-7xl p-4 flex-shrink-0 rounded-2xl border border-gray-300 bg-opacity-80 bg-custom-200'>
                <div className='flex gap-14'>
                    <div className={'rounded-full border h-16 w-16 flex items-center justify-center'}>
                        <p>LOGO</p>
                    </div>
                    <AboutBlock title="Компания" value={company} icon={<LocationIcon/>} location={location}/>
                    <PositionBlock title="Должность" value={position} icon={<BagIcon/>} other={infotech}/>
                    <InfoBlock title="Оклад" value={salary} icon={<BagIcon/>} worktime={workday}/>
                    <ExpBlock title="Опыт работы" value={experience}/>
                </div>
            </div>
        </div>
    );
};

export default VacancyCard;