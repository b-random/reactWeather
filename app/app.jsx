{/*jsx comments*/}
let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let Main = require('Main');
let Weather = require('Weather');
let About = require('About')
let Examples = require('Examples');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
      <Route path="/about" component={About}/>
      <Route path="/examples" component={Examples}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
