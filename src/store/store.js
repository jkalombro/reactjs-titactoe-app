import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

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