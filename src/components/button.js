import React from 'react';
import {Link} from "react-router-dom";

const Button = (props) => {
    return (
        <div>
            <Link to={props.to} className={props.className} onClick={props.onClick}>{props.name}</Link>
        </div>
    );
};

export default Button;