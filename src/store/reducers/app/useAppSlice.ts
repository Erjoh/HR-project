import {RootState, useAppDispatch} from "../../store";
import {setRole} from "./appSlice";
import {useSelector} from "react-redux";
import {RoleTypes} from "./appTypes";

export const useAppSlice = () => {
    const isAuthed = useSelector((state: RootState) => state.app.isAuth)
    const role = useSelector((state: RootState) => state.app.role)
    const dispatch = useAppDispatch()
    const setAuthRole = (role: RoleTypes) => {
        dispatch(setRole(role))
    }
    return {
        isAuthed,
        role,
        setAuthRole
    }
}