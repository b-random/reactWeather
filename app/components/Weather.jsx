let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMapAPI = require('openWeatherMapAPI');
let ErrorModal = require('ErrorModal');

let Weather = React.createClass({

  getInitialState: function(){
    return{
      isLoading: false                  //set to false; when set to true the conditional below
    }                                   //will use it to run the load icon
  },

  handleSearch: function(location){
    let self = this;

    this.setState({                      //isLoading set to true, to run just before API loads
      isLoading: true,
      errorMessage: undefined,
      location: undefined,              //by setting them to undefined, it clears the data for every new search
      temp: undefined
    });

    openWeatherMapAPI.getTemp(location).then(function(temp){    //this promis pulls down the functionality from openWeatherMapAPI, which includes promises.  This is why we dont need 'new Promise'
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e){
      self.setState({
        errorMessage: e.message,
        isLoading: false
      });
    });
  //  this.setState({
  //    location: location,
  //    temp: 23
  //  });
  },

  componentDidMount: function(){
    let location = this.props.location.query.location;   //when a link on the examples page is clicked, it passes '/?location=London&_k=641y99' to the root page, which is weather
                                                         //'this.props.location.query.location' makes the location prop equal to the location parameter passed with the link.
    if(location && location.length > 0){                 //then passes the location to the handleSearch function where it defines this.state.
      this.handleSearch(location);                       //the problem here is the params wont clear, even after a refresh.  window.location.hash = '#/' resets it to root
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function(newProps){
    let location = newProps.location.query.location;

    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  render: function(){
    let {isLoading, temp, location, errorMessage} = this.state;    //same as: let temp = this.state.temp;
                                                                   //let location = this.state.location;
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    };

    function renderError(){
      if(typeof errorMessage === 'string'){
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    };

    return(
      <div className="page-title">
        <h2 className="text-center title">WeatherSnap</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
