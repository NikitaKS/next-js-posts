import {AppState} from "./store";
import {ThunkAction} from "redux-thunk";
import {
    AppActions,
    setPosts,
    setStatus,
    addNewPost, setComments, setPost, setChangedPost, deletePostAC, setNewComment,
} from "./actionCreators";
import {apiPosts} from "../dal/api";
import {IComment, IPost, Statuses} from "../helpers/types";


type ThunkActionType = ThunkAction<Promise<void>, AppState, unknown, AppActions>;

export const getPosts = (): ThunkActionType => async (dispatch) => {
    try {
        const result = await apiPosts.getPosts();
        dispatch(setPosts(result));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};

export const getPost = (id: string): ThunkActionType => async (dispatch) => {
    try {
        const result = await apiPosts.getPost(id);
        dispatch(setPost(result));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const addPost = (post: IPost): ThunkActionType => async (dispatch) => {
    try {
        const result = await apiPosts.addNewPost(post);
        dispatch(addNewPost(result));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const getComments = (id: string): ThunkActionType => async (dispatch) => {
    try {
        const comments = await apiPosts.getComments(id);
        dispatch(setComments(comments));

    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const changePost = (id: string, newPost: IPost): ThunkActionType => async (dispatch) => {
    try {
        const result = await apiPosts.changePost(id, newPost);
        dispatch(setChangedPost(result));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const deletePost = (id: string): ThunkActionType => async (dispatch) => {
    try {
        await apiPosts.deletePost(id);
        dispatch(deletePostAC(id));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const addComment = (postId: string, body: string): ThunkActionType => async (dispatch) => {
    try {
        const result = await apiPosts.addComment(postId, body);
         dispatch(setNewComment(result));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
