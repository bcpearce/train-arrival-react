import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Arrivals extends Component {

  componentWillMount() {
    //this.props.dispatch(fetchArrivals())
  }

  renderArrival(arrival, index) {
    return (
      <div className="arrival" key={index}>
        <span className="arrival-line">
          <img 
            src={process.env.REACT_APP_API_SERVER + `/bullet/${arrival.route}`}
            alt={`(${arrival.route})`}
            className="bullet">
          </img>  {Math.round(parseFloat(arrival.time)/60.0)} Minutes Away
        </span>
      </div>
    )
  }

  render() {
    const arrivals = Object.values(this.props.arrivals)
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
  console.log(state.arrivals)
  return {
    arrivals:state.arrivals[ownProps.direction],
    direction:ownProps.direction,
    limit:ownProps.limit,
  }
}

export default connect(mapStateToProps)(Arrivals);