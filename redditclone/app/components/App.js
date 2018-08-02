import React from 'react';
import Routes from '../routes';
import { Link, Route } from 'react-router-dom';
import FeedContainer from '../containers/FeedContainer';
import About from './About.js';

const App = () => {
    return (<div>
      { Routes }
      <h1>Shreddit</h1>
      <Route exact = {true} path="/" component={FeedContainer} />
      <Route path="/about" render={About}/>
      <Link to="/">Take me homeeee</Link><br/>
      <Link to="/about">About Page?</Link>
    </div>);
};

export default App;
