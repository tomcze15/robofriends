import { CHANGE_SEARCH_FIELD } from '../constants/action_types';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});