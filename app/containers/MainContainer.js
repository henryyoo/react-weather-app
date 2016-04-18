var React = require('react');
var Header = require('../components/Header');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <div>
        <Header />
        </div>
        <div>
        {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Main;
