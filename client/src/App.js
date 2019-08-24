import React from 'react';
import './App.css';
import { Switch,Route,BrowserRouter } from 'react-router-dom'
import Landing from './pages/landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Landing }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
