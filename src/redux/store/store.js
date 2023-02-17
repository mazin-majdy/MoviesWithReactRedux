
import { legacy_createStore, applyMiddleware } from "redux";
import { moviesReducer } from '../reducers/movieReducer';
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Create store
export const store = legacy_createStore(moviesReducer, applyMiddleware(thunk));