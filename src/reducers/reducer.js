import { combineReducers } from 'redux';

import { RECEIVE_STOPS, REQUEST_STOPS } from '../actions/async_actions';

const stops = (state={isFetching:false, items:[]}, action) => {
  switch(action.type) {
    case REQUEST_STOPS:
      return {isFetching:true, items:[]}
    case RECEIVE_STOPS:
      return {isFetching:false, items:action.data}
    default:
      return state;
  }
}

const reducer = combineReducers({
  stops
})

export default reducer;