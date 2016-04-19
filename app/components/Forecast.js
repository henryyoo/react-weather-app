var React = require('react');
var PropTypes = React.PropTypes;
var getDate = require('../helpers/utils').getDate;
function Forecast(props){
  var date = getDate(props.date);
  return (
  <div className="col-md-offset-3 col-md-6">
    <a href="#" className="thumbnail">
      <img src={"./app/images/weather-icons/" + props.image + ".svg"} />
      <br />
      <p className='text-center'>{date}</p>
    </a>
  </div>
  )
}

Forecast.propTypes = {
  image: PropTypes.string.isRequired
}

module.exports = Forecast;
