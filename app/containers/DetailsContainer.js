var React = require('react');
var convertTemp = require('../helpers/utils').convertTemp;
var Forecast = require('../components/Forecast');
var DetailsContainer = React.createClass({
  componentDidMount: function(){
    console.log(this.props.location.state.item);
  },
  render: function(){
    var item = this.props.location.state.item;
    var maxTemp = Math.round(convertTemp(item.temp.max));
    var minTemp = Math.round(convertTemp(item.temp.min));
    return (
      <div>
        <Forecast item={item} />
        <br />
        <p>Humidity : {item.humidity}</p>
        <p>Pressure: {item.pressure}</p>
        <p>Max Temp: {maxTemp}</p>
        <p>Min Temp :{minTemp}</p>
      </div>
    )
  }
});

module.exports = DetailsContainer;
