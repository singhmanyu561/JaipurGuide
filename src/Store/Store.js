import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../Reducers'


const persistedState = localStorage.getItem('reduxStore') ? JSON.parse(localStorage.getItem('reduxStore')) : {};

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

/* const middleware = [thunk]; */
const store = createStore(
    rootReducer,
    persistedState,
    enhancer
);
export default store;