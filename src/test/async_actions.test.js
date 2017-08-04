import * as async_actions from '../actions/async_actions';

const defaultData = {
  stops: {
    "101": {
      "location_type": "0", 
      "parent_station": "101", 
      "stop_code": "", 
      "stop_desc": "", 
      "stop_id": "101S", 
      "stop_lat": "40.889248", 
      "stop_lon": "-73.898583", 
      "stop_name": "Van Cortlandt Park - 242 St", 
      "stop_url": "", 
      "zone_id": ""
    },
    "103": {
      "location_type": "0", 
      "parent_station": "103", 
      "stop_code": "", 
      "stop_desc": "", 
      "stop_id": "103S", 
      "stop_lat": "40.884667", 
      "stop_lon": "-73.90087", 
      "stop_name": "238 St", 
      "stop_url": "", 
      "zone_id": ""
    }
  }
}

describe('async_actions', () => {

  it ('creates an action to request stops', () => {
    const expectedAction = {
      type: async_actions.REQUEST_STOPS
    }
    expect(async_actions.requestStops()).toEqual(expectedAction);
  });

  it ('creates an action to receive stops', () => {
    const data = defaultData;
    const expectedAction = {
      type: async_actions.RECEIVE_STOPS,
      data
    }
    expect(async_actions.receiveStops(defaultData)).toEqual(expectedAction);
  });
});