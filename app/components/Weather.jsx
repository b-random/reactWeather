let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMapAPI = require('openWeatherMapAPI');

let Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false                  //set to false; when set to true the conditional below
    }                                   //will use it to run the load icon
  },

  handleSearch: function(location){
    let self = this;

    this.setState({                      //isLoading set to true, to run just before API loads
      isLoading: true
    });

    openWeatherMapAPI.getTemp(location).then(function(temp){    //this promis pulls down the functionality from openWeatherMapAPI, which includes promises.  This is why we dont need 'new Promise'
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage){
      alert(errorMessage);
    });
  //  this.setState({
  //    location: location,
  //    temp: 23
  //  });
  },

  render: function(){
    let {isLoading, temp, location} = this.state;    //same as: let temp = this.state.temp;
                                                     //let location = this.state.location;
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    };

    return(
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
