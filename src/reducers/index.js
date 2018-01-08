import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import bankAccounts from './bank-accounts';


const rootReducer = combineReducers({
  bankAccounts,
  form,
});

export default rootReducer;
