import React, { Component } from 'react';
import Welcome from './Welcome';
import Help from './Help';
import WritingApp from './App';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = (props) => {
  let params = new URLSearchParams(props.location.search);
  let parse = p => {
    switch (p.toLowerCase()) {
      case "true": return true;
      case "1": return true;
      case "false": return false;
      case "0": return false;
      default: return null;
    }
  }

  let appProps = {
    limit: parseInt(params.get('limit'), 10) || 5,
    type: params.get('type') || "minutes",
    hardcore: parse(params.get('hardcore')),
    nightmode: parse(params.get('nightmode'))
  }
  // Setting a random key forces the component to re-mount even if
  // the route didn't change. That's useful for when we click the
  // Write button from withing <WritingApp />
  return <WritingApp key={Math.random()} {...appProps} />
}

export default class MDWA extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/manifest.json" onEnter={() => window.location.reload()} />
        <Route path="/assets/*" onEnter={() => window.location.reload()} />
        <Route path="/" exact component={Welcome} />
        <Route path="/write" component={App} />
        <Route path="/help" component={Help} />
      </Router>
    )
  }
}
