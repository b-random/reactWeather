let React = require('react');

//let WeatherMessage = React.createClass({
//  render: function(){
//    let {temp, location} = this.props;         //same as:  let temp = this.props.temp;
//                                               //          let location = this.props.location;
//    return(
//      <div>
//        <h2>It's {temp}&#8457; in {location}</h2>
//      </div>
//    );
//  }
//});

//let WeatherMessage = (props) => {
//  let {temp, location} = props;
//
//  return(
//    <div>
//      <h2>It's {temp}&#8457; in {location}</h2>
//    </div>
//  );
//};

//the es6 variable destructuring is now built into react and the function
//can be further simplified by including the variable object as argument...

let WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <h2>It's {temp}&#8457; in {location}</h2>
    </div>
  );
};


module.exports = WeatherMessage;
