let React = require('react');

let WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    let location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="location"/>
        </div>
        <div>
          <button>What's it like out there<span>&#63;</span></button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
