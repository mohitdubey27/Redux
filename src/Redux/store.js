import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import registerReducer from './reducers/registerReducer';
import loginReducers from './reducers/loginReducer';
import createContactReducer from './reducers/createContactReducer';
import getContactListReduder from './reducers/getContactListReducer';
import readContactReducer from './reducers/readContactReducer';
import editContactReducer from './reducers/editContactReducer';
import deleteContactReducer from './reducers/deleteContactReducer';

const reducer = combineReducers({
  registerReducer,
  loginReducers,
  createContactReducer,
  getContactListReduder,
  readContactReducer,
  editContactReducer,
  deleteContactReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
