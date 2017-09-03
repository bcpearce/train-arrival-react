import { combineReducers } from 'redux';

import { 
  RECEIVE_STOPS, 
  REQUEST_STOPS,
  RECEIVE_ARRIVALS,
  REQUEST_ARRIVALS, 
  SET_STOP_ID,
} from '../actions/async_actions';

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

const activeStop = (state=null, action) => {
  console.log(action);
  switch(action.type) {
    case SET_STOP_ID:
      return action.stopId
    default:
      return state
  }
}

const arrivals = (state={isFetching:false, northbound:[], southbound:[]}, action) => {
  switch(action.type) {
    case REQUEST_ARRIVALS:
      return {isFetching:true, northbound:state.northbound, southbound:state.southbound}
    case RECEIVE_ARRIVALS:
      const direction = action.data.stop.stop_id[action.data.stop.stop_id.length-1]
      if (direction === 'N')
        return {
          isFetching:false, 
          northbound:action.data.arrivals,
          southbound:state.southbound
        };
      else if (direction === 'S') {
        return {
          isFetching:false,
          northbound:state.northbound,
          southbound:action.data.arrivals
        }
      }
      else {
        return state;
      }
    default:
      return state;
  }
}

const reducer = combineReducers({
  stops, activeStop, arrivals
})

export default reducer;