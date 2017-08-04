export const REQUEST_STOPS = 'REQUEST_STOPS';
export const RECEIVE_STOPS = 'RECEIVE_STOPS';
export const REQUEST_ARRIVALS = 'REQUEST_ARRIVALS';
export const RECEIVE_ARRIVALS = 'RECEIVE_ARRIVALS';

var api = require('./api');

export function requestStops(){
  return {
    type:REQUEST_STOPS
  };
}

export function receiveStops(data){
  return {
    type:RECEIVE_STOPS,
    data
  };
}

export const fetchStops = () => {
  return dispatch => {
    dispatch(requestStops());
    return api.getStops()
      .then(response => response.data)
      .then(data => dispatch(receiveStops(data)))
  }
}