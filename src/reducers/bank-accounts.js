import { ADD_BANK_ACCOUNT } from '../constants';


const initialState = [];

export default function bankAccounts(state = initialState, action) {
  switch (action.type) {
    case ADD_BANK_ACCOUNT: {
      return [...state, action.value];
    }
    default: {
      return state;
    }
  }
}
