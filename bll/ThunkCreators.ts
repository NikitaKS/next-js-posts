import {AppState} from "../redux/store";
import {ThunkAction} from "redux-thunk";
import {
    AppActions,
    setPosts,
    setStatus,
} from "./actionCreators";
import {apiPosts} from "../dal/api";
import {IComment, IPost, Statuses} from "../helpers/types";


type ThunkActionType = ThunkAction<Promise<void>, AppState, unknown, AppActions>;

export const getPosts = (): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        const result = await apiPosts.getPosts();
        dispatch(setPosts(result));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};

