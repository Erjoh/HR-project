import React from 'react';
import {Link} from "react-router-dom";

const Direction = (props) => {
    return (
        <div className={'p-2 items-center justify-center flex border border-gray-500 w-32 rounded-full'}>
            <Link to={''}>{props.name}</Link>
        </div>
    );
};

export default Direction;