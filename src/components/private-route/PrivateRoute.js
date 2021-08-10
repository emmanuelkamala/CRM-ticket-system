import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuth = true;

function PrivateRoute({children, ...rest}) {
  return (
    <Route
      render = {() => (isAuth? children : <Redirect to='/' />) }  
    />
  )
}

export default PrivateRoute
