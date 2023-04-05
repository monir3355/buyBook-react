import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  // const {error, status} = useRouteError();
  return (
    <div className='flex justify-center items-center min-h-[calc(90vh-84px)]'>
      <h2 className='text-3xl font-semibold'>Error</h2>
    </div>
  );
};

export default ErrorPage;