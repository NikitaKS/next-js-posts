import {
    GET_POSTS,
    SET_STATUS,
} from "../helpers/constants";
import {IComment, IPost, Statuses} from "../helpers/types";

interface IGetPosts {
    type: typeof GET_POSTS,
    posts: IPost[]
}

interface ISetStatus {
    type: typeof SET_STATUS,
    status: Statuses
}


export type AppActions = IGetPosts
    | ISetStatus

export const setPosts = (posts: IPost[]): IGetPosts => ({type: GET_POSTS, posts});
export const setStatus = (status: Statuses): ISetStatus => ({type: SET_STATUS, status});

