import {DEFAULT} from "../constants";

export const defaultAction = () => dispatch => {
    dispatch({
        type: DEFAULT,
    })
};