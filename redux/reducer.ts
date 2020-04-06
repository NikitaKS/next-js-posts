import {GET_POSTS} from "../helpers/constants";
import {IPost} from "../helpers/types";
import {AppActions} from "../bll/actionCreators";


let initialState = {
    posts: [] as IPost[]
};

type StateType = typeof initialState;

export const reducer = (state = initialState, action: AppActions): StateType => {
    switch (action.type) {
        case GET_POSTS: {
            return {
                ...state,
                posts: action.posts
            }
        }
        default: {
            return state
        }
    }
};
