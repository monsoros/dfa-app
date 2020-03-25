import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Main/Nav';
import Developer from './components/Developer/Developer';
import DFA from './components/Main/DFA';
import Docs from './components/Doc/Docs';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="main">
        <Route exact path="/" component={DFA}></Route>
        <Route path="/docs" component={Docs}></Route>
        <Route path="/developers" component={Developer}></Route>
      </div>
    </div>
  );
}

export default App;
