import { combineReducers } from "redux";
import reducer from "./amountreducer";

const reducers = combineReducers({
    amount: reducer,

})
export default reducers