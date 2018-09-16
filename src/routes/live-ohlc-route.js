import React from 'react';

import DynamicImport from '../components/common/dynamic-import/dynamic-import';

export const LiveOhlcRoute = (props) => (
  <DynamicImport load={() => import('../components/live-ohlc/live-ohlc')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);