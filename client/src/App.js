import React from 'react';
import './App.css';
import { Switch,Route,BrowserRouter } from 'react-router-dom'
import Landing from './pages/landing';
import Register from './pages/register'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Landing }/>
        <Route exact path='/register' component={ Register } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
