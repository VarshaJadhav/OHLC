
// react component
import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import {reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
	form: formReducer
});

/* create store and apply required middleware */
export default createStore(reducers, applyMiddleware(ReduxThunk));