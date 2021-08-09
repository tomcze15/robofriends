import { CHANGE_SEARCH_FIELD } from '../constants/action_types';

const initialState = {
  searchField: ''
}

export const searchRobotsReducer = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
}