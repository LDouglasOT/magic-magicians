import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import '../App.css';
import { Calculator, Home, Quote } from '../components';

function MainPage() {
  return (
    <Router>
      <div>
        <div className="navigation">
          <h3 className="mathmags">Math Magicians</h3>
          <ul>
            <li><Link to="/"><h3>Home</h3></Link></li>
            <li><Link to="/calculator/"><h3>Calculator</h3></Link></li>
            <li><Link to="/quote/"><h3>Quote</h3></Link></li>
          </ul>
        </div>
        <div className="main-wrapper">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/calculator">
              <Calculator />
            </Route>
            <Route exact path="/quote">
              <Quote />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default MainPage;
