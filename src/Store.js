import { createStore } from "redux";
import { CakeReducer } from "./Reducers/CakeReducer";
const Store = createStore(CakeReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default Store;