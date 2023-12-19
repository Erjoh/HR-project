import React from 'react';
import InfoBlock from "./infoBlock";
import LocationIcon from "./locationIcon";
import BagIcon from "./bagIcon";
import AboutBlock from "./aboutBlock";
import PositionBlock from "./positionBlock";
import ExpBlock from "./expBlock";
const VacancyCard = ({company, position, salary, experience, workday, location, infotech}) => {
    return (
        <div className='flex justify-center'>
            <div className='max-w-7xl p-4 flex-shrink-0 rounded-2xl border border-gray-300 bg-opacity-80 bg-custom-200'>
                <div className='flex justify-between items-start gap-14 '>
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