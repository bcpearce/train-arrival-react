import * as async_actions from '../actions/async_actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const defaultData = {
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
};

var api = require('../actions/api');
var MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(api.api);

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

  it('creates RECEIVE_STOPS when fetching stops has been done', () => {

    mock.onGet('/stops').reply(200, defaultData);

    const expectedActions = [
      { type: async_actions.REQUEST_STOPS },
      { type: async_actions.RECEIVE_STOPS, data: defaultData }
    ]
    const store = mockStore({ stops: [] })

    return store.dispatch(async_actions.fetchStops()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

});