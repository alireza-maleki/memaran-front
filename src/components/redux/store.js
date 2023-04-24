import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    getNavItemReducer,
    getAllDataReducer,
    getProductByIdReducer,
    addToCardReducer,
} from './reducer';



const reducers = combineReducers({
    navItem: getNavItemReducer,
    products: getAllDataReducer,
    detail: getProductByIdReducer,
    addProduct: addToCardReducer,
});



const middleware = [thunk];

const initialState = {};

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
