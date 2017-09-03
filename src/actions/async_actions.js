export const REQUEST_STOPS = 'REQUEST_STOPS';
export const RECEIVE_STOPS = 'RECEIVE_STOPS';
export const REQUEST_ARRIVALS = 'REQUEST_ARRIVALS';
export const RECEIVE_ARRIVALS = 'RECEIVE_ARRIVALS';
export const SET_STOP_ID = 'SET_STOP_ID';

var api = require('./api');

//Requesting Stop Info

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

//Requesting Arrival Info
export function setStopId(stopId) {
  return {
    type:SET_STOP_ID,
    stopId
  }
}
export function requestArrivals(){
  return {
    type:REQUEST_ARRIVALS
  };
}

export function receiveArrivals(data){
  return {
    type:RECEIVE_ARRIVALS,
    data
  }
}

export const fetchArrivals = (stopId) => {
  return dispatch => {
    dispatch(requestArrivals());
    return api.getArrivals(stopId)
      .then(response => response.data)
      .then(data => dispatch(receiveArrivals(data)))
  }
}