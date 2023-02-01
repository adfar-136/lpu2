import { createStore } from "redux";
import { currencyReducer } from "./reducers/currencyReducer";

const store = createStore(currencyReducer)

export default store