import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostsList from './PostsList';
import PostDetails from './PostDetails';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/posts/:id" component={PostDetails} />
          <Route path="/posts" component={PostsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
