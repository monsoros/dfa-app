import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Developer from './components/Developer';
import DFA from './components/DFA';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div>
        <Route exact path="/" component={DFA}></Route>
        <Route path="/developers" component={Developer}></Route>
      </div>
    </div>
  );
}

export default App;
