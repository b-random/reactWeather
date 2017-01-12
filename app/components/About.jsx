let React = require('react');

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

let About = () => {return <h3>About component</h3>};

/*this refactoring to es6 arrow function is possible because the module only
contains a render function and no state*/

module.exports = About;
