// React modules
import React, { Component } from 'react';
import io from 'socket.io-client';

import { ROOT_URL } from '../../constants';

/* make socket connection with our root/server URL */
const socket = io(ROOT_URL, {
  'reconnection': true,
  'reconnectionDelay': 1000,
  'reconnectionDelayMax': 5000,
  'forceNew': true
});

class LiveOhlc extends Component {
  componentWillMount() {
    socket.on(`subscribe`, data => {
      console.log({ data })
    });
  }

  componentWillUnmount() {
    socket.on(`unsubscribe`, data => {
      console.log({ data })
    });
  }

  render() {
    return (
      <div>
	      <p>LiveOhlc Screen</p>
      </div>
    );
  }
}

export default LiveOhlc;