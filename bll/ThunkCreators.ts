import {AppState} from "../redux/store";
import {ThunkAction} from "redux-thunk";
import {
    AppActions,
    setNotes,
    setStatus,
} from "./actionCreators";
import {apiNotes} from "../dal/api";
import {IComment, INote, Statuses} from "../helpers/types";


type ThunkActionType = ThunkAction<Promise<void>, AppState, unknown, AppActions>;

export const getNotes = (): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        const result = await apiNotes.getNotes();
        dispatch(setNotes(result));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};

