let React = require('react');

let ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: 'Error'
    };
  },

  propTypes: {                                      //propTypes specify the primitive type of a prop.
    title: React.PropTypes.string,                  //unless the propType specifies 'isRequired' the component will render w/o the prop, and alert the console
    message: React.PropTypes.string.isRequired      //unless 'isRequired' no prop is ok, but if there is a prop it must match the propType
  },

  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  /*Here we use the foundation object to call the modal div below.  Since
  we set up jquery in webpack.config, we can use a jquery grab.  Can also
  use 'refs'*/

  render: function(){

    let {title, message} = this.props;

    return(
      <div id="error-modal" className="reveal tiny text-center" data-reveal=''> {/*all classes/id's are required for error modal*/}
        <h4>{title}!</h4>
        <p>{message}</p>
        <p>
         <button className="button hollow" data-close=''>
           Okay
         </button> {/*data-close class closes the modal on click*/}
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;

/*The error modal is very simple but hidden by default and requires js to
fire using react's "component life-cycle methods".*/
