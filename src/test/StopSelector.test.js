import React from 'react';
import ReactDOM from 'react-dom';
import { StopSelector } from '../components/StopSelector';
import { shallow } from 'enzyme';

const defaultProps = {
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
  },
  dispatch: function() {}
}

it('renders without crashing', () => {
  shallow(<StopSelector stops={[]} dispatch={function(){}} />);
});


describe('selector', () => {

  const wrapper = shallow(<StopSelector {...defaultProps} />)

  it('has an option with the stop name', () => {
    expect(wrapper.find("option").at(0).text()).toEqual("Van Cortlandt Park - 242 St");
    expect(wrapper.find("option").at(1).text()).toEqual("238 St");
  });

  it('has a value with the parent_station id', () => {
    expect(wrapper.find("option").at(0).prop('value')).toEqual("101");
    expect(wrapper.find("option").at(1).prop('value')).toEqual("103");
  });

});