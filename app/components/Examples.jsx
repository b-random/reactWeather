let React = require('react');
let {Link} = require('react-router');
//let Examples = React.createClass({
//  render: function(){
//    return(
//      <h2>Example component</h2>
//    );
//  }
//});

let Examples = () => {
  let marginTop = {marginTop: '4em'};
  return (
    <div style={marginTop} className="text-center">
      <h2 className="text-center">Examples</h2>
      <p className="text-center">Here are a few Example locations to try!</p>
      <div className="text-center">
        <li>
          <Link to="/?location=Austin">Austin, Texas</Link> {/*here we link to the root and pass search params*/}
        </li>
        <li>
          <Link to="/?location=London">London, England</Link>
        </li>
      </div>
    </div>
  )
};


module.exports = Examples;
