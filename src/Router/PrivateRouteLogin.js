import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {checkLogin} from '../pages/login/index';


function PrivateRouteLogin ({component: Component, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => checkLogin() == 1
          ? <Component {...props} />
          : <Redirect to={{pathname: "/404", state: {from: props.location}}} />}
      />
    )
  }


export default PrivateRouteLogin;