
// React components.
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ROUTES_CONST from './routes-const';

import { Historical } from './historical-route';
import { LiveChartRoute } from './live-chart-route';
import { LiveOhlcRoute } from './live-ohlc-route';
import { SearchRoute } from './search-route';

export default () => {
  return (
    <Switch>
      <Route exact path={ROUTES_CONST.home} component={Historical} />
      <Route exact path={ROUTES_CONST.liveChart} component={LiveChartRoute} />
      <Route exact path={ROUTES_CONST.liveOhlc} component={LiveOhlcRoute} />
      <Route exact path={ROUTES_CONST.search} component={SearchRoute} />
      <Route component={require('../components/common/page-not-found/page-not-found').default} />
    </Switch>
  )
}