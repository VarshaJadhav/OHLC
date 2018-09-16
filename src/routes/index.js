
// React components.
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ROUTES_CONST from './routes-const';

export default () => {
  return (
    <Switch>
      <Route exact path={ROUTES_CONST.home} component={require('../components/historical/historical').default} />
      <Route exact path={ROUTES_CONST.liveChart} component={require('../components/live-chart/live-chart').default} />
      <Route exact path={ROUTES_CONST.liveOhlc} component={require('../components/live-ohlc/live-ohlc').default} />
      <Route exact path={ROUTES_CONST.search} component={require('../components/search-screen/search-screen').default} />
      <Route component={require('../components/common/page-not-found/page-not-found').default} />
    </Switch>
  )
}