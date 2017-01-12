let React = require('react');
let Navbar = require('Navbar');

//let Main = React.createClass({
//  render: function(){
//    return(
//      <div>
//        <Navbar/>
//        <h3>Main component</h3>
//        {this.props.children}
//      </div>
//    );
//  }
//});

let Main = props => {
  return(
    <div>
      <Navbar/>
      <h3>Main component</h3>
      {props.children}  
    </div>
  )
};

module.exports = Main;
