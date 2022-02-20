import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {CheckRole} from '../login/index';


function PrivateRoute ({component: Component, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => CheckRole() == 1
          ? <Component {...props} />
          : <Redirect to={{pathname: "/404", state: {from: props.location}}} />}
      />
    )
  }


export default PrivateRoute;