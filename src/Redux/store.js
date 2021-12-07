import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import registerReducer from './reducers/registerReducer';
import loginReducers from './reducers/loginReducer';

const reducer = combineReducers({
  registerReducer,
  loginReducers,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
