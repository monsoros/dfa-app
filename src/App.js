import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './components/Main/Nav';
import Developer from './components/Developer/Developer';
import DFA from './components/Main/DFA';
import Docs from './components/Doc/Docs';
import Footer from './components/Main/Footer';
import './App.css';
import ReactNotifications from 'react-notifications-component';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <header>
          <Nav />
        </header>
        <div className="main">
          <ReactNotifications />
          <Route exact path="/" component={DFA}></Route>
          <Route path="/docs" component={Docs}></Route>
          <Route path="/developers" component={Developer}></Route>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
