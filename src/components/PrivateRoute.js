import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({component:Component, ...rest}) {

  return (<Route {...rest} render={(props) => {
    
    if(localStorage.getItem("token")) {
      return <Component {...props} />
    } else {
      <Redirect to="/login" />
    }
  }}/>);

}

//finished private route, I'm pretty sure, will add things if needed.

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute DONE