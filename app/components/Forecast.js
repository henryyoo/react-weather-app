var React = require('react');
var PropTypes = React.PropTypes;
var getDate = require('../helpers/utils').getDate;
function Forecast(props){
  var date = getDate(props.item.dt);
  var image = props.item.weather[0].icon;
  return (
  <div className="col-md-offset-3 col-md-6">
    <div onClick={props.onSubmitDetails} className="thumbnail">
      <img src={"./app/images/weather-icons/" + image + ".svg"} />
      <br />
      <p className='text-center'>{date}</p>
    </div>
  </div>
  )
}

Forecast.propTypes = {
  item: PropTypes.object.isRequired,
  onSubmitDetails: PropTypes.func
}

module.exports = Forecast;
