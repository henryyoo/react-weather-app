var React = require('react');
var WeatherHelper = require('../helpers/api');
var Forecast = require('../components/Forecast');
var ForecastContainer = React.createClass({
  getInitialState: function(){
    return {
        loading:true,
        data: []
    }
  },
  componentDidMount: function(){
      WeatherHelper.fetch5DayWeather(this.props.routeParams.city)
      .then(function(response){
        this.setState({
          loading:false,
          data:response.list
        });
      }.bind(this));
  },
  render : function(){
    if(this.state.loading){
      return <div>Loading...</div>
    } else {
      return (
        <div className='row' >
        {
          this.state.data.map(function(item){
            return <Forecast key={item.dt} image={item.weather[0].icon}
            date={item.dt}/>
        })}
        </div>
      )
      };

    }
});


module.exports= ForecastContainer;
