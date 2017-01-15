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
      <div className="row">
        <div className="medium-6 large-4 small-centered columns">
          {props.children}
        </div>
      </div>
    </div>
  )
};

module.exports = Main;
