import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'

export const Loader = ({ path }) => {
  const LazyTab = lazy(() => import(`../../${path}`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyTab />
    </Suspense>
  );
};

Loader.propTypes = {
  path: PropTypes.string,
}
