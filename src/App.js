import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className='App'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/portfolio' component={Portfolio} />
            </Switch>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
