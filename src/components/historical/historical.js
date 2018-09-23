// React modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHistoricalData } from '../../actions/historical-action';

class Historical extends Component {
  componentDidMount() {
    this.props.getHistoricalData();
  }

  render() {
    return (
      <div>
		    <p>Historical Screen</p>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  const {
    'historicalReducer': {
      historicalData
    }
  } = reduxState;

  return {
    historicalData
  }
}

export default connect(mapStateToProps, { getHistoricalData })(Historical);