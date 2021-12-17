import React from 'react';
import { Route, Redirect } from "react-router-dom";
import styled from 'styled-components';
import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import View from './View';
import Logout from './Logout';

//routed to correct paths here.

const App = () => {
    return (
        <AppContainer>
            <BloomHeader/>
            <Header />
            <RouteContainer>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <PrivateRoute path="/view">
                    <View />
                </PrivateRoute>
                <PrivateRoute path="/logout" component={Logout} />
            </RouteContainer>
        </AppContainer>
    )
}

export default App;

//Task List
//1. Create and import PrivateRoute component. DONE
//2. Create a Route for Login pointing to '/login.'DONE
//3. Create a PrivateRoute for View component point to '/view.' WIP, got the concept
//4. Create a PrivateRoute for Logout component pointing to '/logout.' DONE

const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
