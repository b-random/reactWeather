let React = require('react');

let ErrorModal = React.createClass({

  componentDidMount: function(){
    let modal = new Foundation.reveal($('#error-modal'));
    modal.open();
  },
  /*Here we use the foundation object to call the modal div below.  Since
  we set up jquery in webpack.config, we can use a jquery grab.  Can also
  use 'refs'*/

  render: function(){
    return(
      <div id="error-modal" className="reveal tiny text-center" data-reveal=''> //all classes/id's are required for error modal
        <h4>Some Title</h4>
        <p>The error message!</p>
        <p>
         <button className="button hollow" data-close=''>
           Okay
         </button> //data-close class closes the modal on click
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;

/*The error modal is very simple but hidden by default and requires js to
fire using react's "component life-cycle methods".*/
