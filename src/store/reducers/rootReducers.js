import {combineReducers} from 'redux'
import metaReducer from "./metaReducer";

const rootReducer = combineReducers({
    meta: metaReducer,
});
export default rootReducer