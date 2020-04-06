import {GET_NOTES} from "../helpers/constants";
import {INote} from "../helpers/types";
import {AppActions} from "../bll/actionCreators";


let initialState = {
    posts: [] as INote[]
};

type StateType = typeof initialState;

export const reducer = (state = initialState, action: AppActions): StateType => {
    switch (action.type) {
        case GET_NOTES: {
            return {
                ...state,

            }
        }
        default: {
            return state
        }
    }
};
