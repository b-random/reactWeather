{/*jsx comments*/}
let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let Main = require('Main');
let Weather = require('Weather');
let About = require('About')
let Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
      <Route path="About" component={About}/>
      <Route path="Examples" component={Examples}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
