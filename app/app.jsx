{/*jsx comments*/}
let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let Main = require('Main');
let Weather = require('Weather');
let About = require('About');
let Examples = require('Examples');

//foundation loaders
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//css/sass loaders
require('style!css!sass!applicationStyles');

ReactDOM.render(                                  //in react-router components are called as {props} instead of <jsx/>
  <Router history={hashHistory}>
    <Route path="/" component={Main}>             //Main is the global container component for other components to render in
      <IndexRoute component={Weather}/>
      <Route path="/about" component={About}/>
      <Route path="/examples" component={Examples}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
