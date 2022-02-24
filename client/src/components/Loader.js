import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({ width = '100px', height = '100px' }) => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width,
        height,
      }}
      className='d-block m-auto'>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  );
};

export default Loader;
