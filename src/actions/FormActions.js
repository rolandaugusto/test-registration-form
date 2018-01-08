import { ADD_BANK_ACCOUNT } from '../constants';


export function addBankAccount() {
  return (dispatch, getState) => (
    dispatch({ type: ADD_BANK_ACCOUNT, value: getState().bankAccounts.length + 1})
  )
}