import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortBy } from 'underscore';
import { fetchArrivals } from '../actions/async_actions';

export class Arrivals extends Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      if(this.props.parentStopId != null) this.props.dispatch(fetchArrivals(this.props.stopId));
    }, this.props.refreshRate*1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderArrival(arrival, index) {
    const minutes_till_arrival = Math.round(parseFloat(arrival.time)/60.0);
    return (
      <div className="arrival" key={index}>
        <span className="arrival-line">
          <img 
            src={process.env.REACT_APP_API_SERVER + `/bullet/${arrival.route}`}
            alt={`(${arrival.route})`}
            className="bullet">
          </img>
          <span>   </span>
          <span className="terminal"> {arrival.terminal} </span>
          <span>   &bull;   </span>
          {minutes_till_arrival > 0 ? minutes_till_arrival + " Min" : "Arriving"}
        </span>
      </div>
    )
  }

  render() {
    const arrivals = sortBy(Object.values(this.props.arrivals), 'time')
      .slice(0, this.props.limit)
      .map((arrival, index) => 
        this.renderArrival(arrival, index));
    
    return(
      <div className="arrivals">
        <h2 className="direction">{this.props.direction}</h2>
        {arrivals}      
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    arrivals:state.arrivals[ownProps.direction],
    direction:ownProps.direction,
    limit:ownProps.limit,
    parentStopId:state.activeStop,
    stopId:state.activeStop + (ownProps.direction === 'northbound' ? 'N' : 'S'),
    refreshRate:ownProps.refreshRate || 60,
  }
}

export default connect(mapStateToProps)(Arrivals);