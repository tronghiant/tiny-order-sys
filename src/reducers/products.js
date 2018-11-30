// import { FETCH_TODOS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case 1:
      return action.payload;
    default:
      return state;
  }
};
