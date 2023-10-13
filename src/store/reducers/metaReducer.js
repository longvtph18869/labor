import {IS_LOADING, RE_RENDERED, THROW_ERROR, THROW_SUCCESS} from "../constants";
import {toast} from "react-toastify";

const init = {
    isLoading: false,
    error: '',
    success: '',
    reRendered: false
};

const metaReducer = (state = init, action) => {
    switch (action.type) {
        case THROW_ERROR: {
            toast.error(action.payload);
            return {
                ...state,
                error: action.payload
            }
        }
        case THROW_SUCCESS: {
            toast.success(action.payload);
            return {
                ...state,
                success: action.payload
            }
        }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case RE_RENDERED:
            return {
                ...state,
                reRendered: action.payload
            };
        default:
            return state;
    }
};

export default metaReducer;