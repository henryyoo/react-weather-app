var React = require('react');
var convertTemp = require('../helpers/utils').convertTemp;
var Forecast = require('../components/Forecast');

var style = {
  marginTop:"150px",
  width:"400px"

}

var DetailsContainer = React.createClass({
  componentDidMount: function(){
    console.log(this.props.location.state.item);
  },
  render: function(){
    var item = this.props.location.state.item;
    var maxTemp = Math.round(convertTemp(item.temp.max));
    var minTemp = Math.round(convertTemp(item.temp.min));
    
    return (
      <div className ='row'>
        <Forecast item={item} />
        <br />
        <div className="center-block" style = {style}>
          <h3 className='bg-primary text-center'>Humidity : {item.humidity}</h3>
          <h3 className='bg-info text-center'>Pressure : {item.pressure}</h3>
          <h3 className='bg-danger text-center'>Max Temp : {maxTemp}</h3>
          <h3 className='bg-success text-center'>Min Temp : {minTemp}</h3>
        </div>
      </div>
    )
  }
});

module.exports = DetailsContainer;
