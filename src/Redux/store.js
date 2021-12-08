import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import registerReducer from './reducers/registerReducer';
import loginReducers from './reducers/loginReducer';
import createContactReducer from './reducers/createContactReducer';
import getContactListReduder from './reducers/getContactListReducer';

const reducer = combineReducers({
  registerReducer,
  loginReducers,
  createContactReducer,
  getContactListReduder,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
