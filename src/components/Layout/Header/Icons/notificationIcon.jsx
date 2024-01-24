import React from 'react';

const NotificationIcon = () => {
    return (
        <div className={'relative'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <mask id="mask0_8018_105" maskUnits="userSpaceOnUse" x="0" y="0" width="30"
                      height="30">
                    <rect width="30" height="30" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_8018_105)">
                    <path
                        d="M5 23.75V21.25H7.5V12.5C7.5 10.7708 8.02083 9.23438 9.0625 7.89062C10.1042 6.54688 11.4583 5.66667 13.125 5.25V4.375C13.125 3.85417 13.3073 3.41146 13.6719 3.04688C14.0365 2.68229 14.4792 2.5 15 2.5C15.5208 2.5 15.9635 2.68229 16.3281 3.04688C16.6927 3.41146 16.875 3.85417 16.875 4.375V5.25C18.5417 5.66667 19.8958 6.54688 20.9375 7.89062C21.9792 9.23438 22.5 10.7708 22.5 12.5V21.25H25V23.75H5ZM15 27.5C14.3125 27.5 13.724 27.2552 13.2344 26.7656C12.7448 26.276 12.5 25.6875 12.5 25H17.5C17.5 25.6875 17.2552 26.276 16.7656 26.7656C16.276 27.2552 15.6875 27.5 15 27.5Z"
                        fill="#4A6DFF"/>
                </g>
            </svg>
            <div
                className={'absolute left-4 bottom-4 w-6 h-6 bg-red-600 flex items-center justify-center text-white font-thin rounded-full'}>
                16
            </div>
        </div>
    );
};

export default NotificationIcon;