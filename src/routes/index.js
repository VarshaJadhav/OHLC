
// React components.
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={require('../components/historical/historical').default} /> 
        <Route exact path='/live-chart' component={require('../components/live-chart/live-chart').default} />
        <Route exact path='/live-ohlc' component={require('../components/live-ohlc/live-ohlc').default} />
        <Route exact path='/search' component={require('../components/search-screen/search-screen').default} />
        <Route component={require('../components/common/page-not-found/page-not-found').default} />
      </Switch>
    </BrowserRouter>
  )
}