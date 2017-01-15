let React = require('react');
let {Link} = require('react-router');

//let About = React.createClass({
//  render: function(){
//    return(
//      <h3>About component</h3>
//    );
//  }
//});

//can be re-written as...

//let About = function(props){
//  return(
//    <h3>About component</h3>
//  )
//};

//and then again as...

let About = React.createClass ({
  render: function(){
    let marginTop = {marginTop: '6em'};
    return (
      <div style={marginTop} className="text-center">
        <h2>Weather App built with React</h2>
        <h4>Learn about this application <a href="https://github.com/b-random/reactWeather">here</a>...</h4>
        <h4>and about the React framework <a href="https://facebook.github.io/react">here</a>.</h4>

      </div>
    )
  }
});

/*this refactoring to es6 arrow function is possible because the module only
contains a render function and no state*/

module.exports = About;
