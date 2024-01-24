import {DropdownState} from "./dropdownTypes";
import {createSlice} from "@reduxjs/toolkit";

const initialState: DropdownState = {
    isOpen: false,
};

const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState,
    reducers: {
        toggleDropdown: (state) => {
            state.isOpen = !state.isOpen;
        },
    }
});

export const {
    toggleDropdown,
} = dropdownSlice.actions

export default dropdownSlice.reducer