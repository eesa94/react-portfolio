import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
