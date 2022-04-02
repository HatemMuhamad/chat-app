import React, { useState } from 'react';
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import './App.css';
import CreateRoomModal from './components/CreateRoomModal';
import Header from './components/Header';
import Login from './components/Login';
import Rooms from './components/Rooms';
import Signup from './components/Signup';

function App() {

  const location = useLocation();
  return (
    <>
    <Switch>
    <Route exact path="/">
    <Redirect to="/rooms" />
    </Route>
    <Route path="/rooms">
        <Header heading='Available chat rooms'/>
        <Rooms />
        <CreateRoomModal/>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
    </>
  );
}

export default App;
