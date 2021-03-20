import React, { createContext, useState } from 'react'
import './App.css';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Destination from './Components/Destination';
import Blog from './Components/Blog';
import Home from './Components/Home';
import Contact from './Components/Contact';
import LogIn from './Components/LogIn';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';

export const UserContext = createContext();

function App() {
  const [loggedUser,setLoggedInUser]=useState({});
  return (
  <UserContext.Provider value={[loggedUser,setLoggedInUser]}>
    {/* <p>name: {loggedUser.name||loggedUser.displayName}</p>
    <p>email: {loggedUser.email}</p> */}
      <Router>
        <Header/>
          <Switch>
            <Route path="/home">
                <Home/>
            </Route>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <PrivateRoute path="/destination">
                <Destination/>
            </PrivateRoute>
            <Route path="/blog">
                <Blog/>
            </Route>
            <Route path="/login">
                <LogIn/>
            </Route>
            <Route exact path="/profile">
                <Profile/>
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
