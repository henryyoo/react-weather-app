var React = require('react');
var WeatherHelper = require('../helpers/api');
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
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
          data:response
        });
        console.log(response);
      }.bind(this));
  },
  handleSubmitDetails: function(item){
    this.context.router.push({
        pathname: '/details/' + this.props.routeParams.city,
        state:{
          item : item
        }
    });
  },
  render : function(){
    if(this.state.loading){
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <h1 className='text-center'>{this.state.data.city.name}</h1>
          <br />
          <div className='row' >
          {
            this.state.data.list.map(function(item){
              return <Forecast key={item.dt} item={item} onSubmitDetails={this.handleSubmitDetails.bind(null,item)}/>
          }.bind(this))}
          </div>
        </div>
      )
      };

    }
});


module.exports= ForecastContainer;
