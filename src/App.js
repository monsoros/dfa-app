import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Developer from './components/Developer';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div>
        <Route path="/developers" component={Developer}></Route>
      </div>
    </div>
  );
}

export default App;
