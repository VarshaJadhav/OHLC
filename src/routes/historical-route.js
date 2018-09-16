import React from 'react';

import DynamicImport from '../components/common/dynamic-import/dynamic-import';

export const Historical = (props) => (
  <DynamicImport load={() => import('../components/historical/historical')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);

 