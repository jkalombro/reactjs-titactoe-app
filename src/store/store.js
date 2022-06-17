import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const store = createStore(
    rootReducer, 
    composeWithDevTools()
);

export default store;

//Legacy redux store. No longer used. Will keep it for now
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const initialState = {};
// const middleware = [thunk];
// const store = createStore(
//     rootReducer, 
//     initialState, 
//     compose(
//         applyMiddleware(...middleware)
//     )
// );