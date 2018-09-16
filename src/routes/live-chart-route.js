import React from 'react';

import DynamicImport from '../components/common/dynamic-import/dynamic-import';

export const LiveChartRoute = (props) => (
  <DynamicImport load={() => import('../components/live-chart/live-chart')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);