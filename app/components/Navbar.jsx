let React = require('react');
let {Link, IndexLink} = require('react-router');  //load the Link object

//let Navbar = React.createClass({
//  render: function(){
//    return(
//      <div>
//        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>  {/*IndexLink ensure active styles are only applied when the linked component is active. * see notes below*/}
//        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>             {/*the 'to' property represents the path the link leads to*/}
//        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>       {/*activeClassName gives the class to the active component.  This allows you to manipulate only the class that is active with activeStyle.*/}
//      </div>
//    );
//  }
//});

let Navbar = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert('no functionality yet');
  },

  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="menu-text">WeatherSnap</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>   {/*with a form, we must use React.createClass instead of arrow functions*/}
            <ul className="menu">
              <li>
                <input type="search" placeholder="City, State(optional)"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = Navbar;



/*any component that sits at the root level will always be 'active' and include active styles, unless the IndexLink tag is used*/
