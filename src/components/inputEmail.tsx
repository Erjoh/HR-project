import React, {useState} from 'react';

const InputEmail = ({type, placeholder}: {type: string, placeholder: string}) => {
    const [email, setEmail] = useState<string>('')

    return (
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type={type}
                placeholder={placeholder}
                className="pl-10 pr-72 px-40 rounded-md bg-white shadow-md h-16 flex-shrink-0 flex items-center"/>
        </div>
    );
};

export default InputEmail;