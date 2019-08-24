import React from 'react';
import './App.css';
import { Switch,Route,BrowserRouter } from 'react-router-dom'
import Landing from './pages/landing';
import Register from './pages/register'
import User from './pages/user';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Landing }/>
        <Route exact path='/register' component={ Register } />
        <Route exact path='/user/:id?' component={ User } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
