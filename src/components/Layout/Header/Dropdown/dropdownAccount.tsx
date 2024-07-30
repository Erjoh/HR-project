import React, {useEffect, useRef} from 'react';
import DropdownItem from "./dropdownItem";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {toggleDropdown} from "../../../../store/reducers/dropdownAccount/dropdownSlice";
import DownArrowIcon from "../Icons/downArrowIcon";
import Button from "../../../button";
import {ROUTES} from "../../../../utils/ROUTES";

const DropdownAccount = () => {
    const dispatch = useDispatch();
    const dropdownOpen = useSelector((state: RootState) => state.dropdown.isOpen);
    const dropdownRef = useRef(null);
    const handleClick = () => {
        dispatch(toggleDropdown())
    }

    const handleDocumentClick = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            dispatch(toggleDropdown());
        }
    };

    useEffect(() => {
        if (dropdownOpen) {
            document.addEventListener('click', handleDocumentClick);
        }

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [dropdownOpen]);
    return (
        <div ref={dropdownRef} className={'relative'}>
            <Button
                onClick={handleClick}
                className={'flex items-center gap-2 text-gray-950 text-opacity-50 border border-gray-300 bg-gray-100 shadow-md px-4 py-2 rounded-full text-center font-inter text-base font-semibold'}>
                <DropdownItem/>
                <DownArrowIcon/>
            </Button>
            <div
                className={`z-10 ${dropdownOpen ? '' : 'hidden'} rounded-2xl flex flex-col top-16 items-start absolute gap-4 w-48 px-8 py-4 right-0 left-3 bg-white border`}>
                <Link to={ROUTES.PRIVATE_OFFICE} className={'font-inter font-normal'}>Мой профиль</Link>
                <Link to={''} className={'font-inter font-normal'}>Настройки</Link>
                <Link to={ROUTES.SIGN_IN} className={'font-inter font-normal text-red-500'}>Выйти</Link>
            </div>
        </div>
    );
};

export default DropdownAccount;