var React = require('react');
var WeatherHelper = require('../helpers/api');

var ForecastContainer = React.createClass({
  getInitialState: function(){
    return {
        loading:true,
        data: []
    }
  },
  componentDidMount: function(){
      WeatherHelper.fetch5DayWeather(this.props.routeParams.city)
      .then(function(data){
        this.setState({
          loading:false
        });
        console.log(data);
      }.bind(this));
  },
  render : function(){
    if(this.state.loading){
      return <div>Loading...</div>
    } else {
      return <div>ForecastContainer</div>
    }
  }
});


module.exports= ForecastContainer;
