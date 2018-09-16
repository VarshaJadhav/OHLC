import React from 'react';

import DynamicImport from '../components/common/dynamic-import/dynamic-import';

export const SearchRoute = (props) => (
  <DynamicImport load={() => import('../components/search-screen/search-screen')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
);