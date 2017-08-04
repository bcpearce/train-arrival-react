import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStops } from '../actions/async_actions';

export class StopSelector extends Component {

  componentWillMount() {
    this.props.dispatch(fetchStops())
  }

  handleSelect(e) {
    this.props.dispatch(e.target.value);
  }

  renderStopOption(stop) {
    try {
      return (
        <option key={stop.parent_station} value={stop.parent_station}>
          {stop["stop_name"]}
        </option>
      );
    }
    catch (e) {
      return("");
    }
  }

  render() {
    const stops = Object.values(this.props.stops).map(this.renderStopOption);
    return(
      <div>
        <select>
          {stops}
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stops:state.stops.items}
}

export default connect(mapStateToProps)(StopSelector);
