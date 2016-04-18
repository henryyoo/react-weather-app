var React = require('react');
var background = require('../styles/background');
var Home = require('../components/Home');
var WeatherHelper = require('../helpers/api');

var HomeContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      city:''
    }
  },
  handleUpdateCity:function(event){
    this.setState({
      city: event.target.value
    });
  },
  handleSubmitCity:function(e){
    this.context.router.push({
      pathname: '/forecast/' + this.state.city
    });
  },
  render: function(){
    return (
      <div style={background}>
        <Home
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city}
        />
      </div>
    );
  }
});

module.exports =HomeContainer;
