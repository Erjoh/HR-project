import {RootState, useAppDispatch} from "../../store";
import {isAuthed, setRole} from "./appSlice";
import {useSelector} from "react-redux";
import {RoleTypes} from "./appTypes";

export const useAppSlice = () => {
    const isAuth = useSelector((state: RootState) => state.app.isAuth)
    const role = useSelector((state: RootState) => state.app.role)
    const dispatch = useAppDispatch()
    const setAuthRole = (role: RoleTypes) => {
        dispatch(setRole(role))
    }
    const successAuthed = () => {
        dispatch(isAuthed(true))
    }
    return {
        isAuth,
        role,
        successAuthed,
        setAuthRole,
    }
}