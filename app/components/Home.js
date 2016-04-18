var React = require("react");
var position = require("../styles/text").position;
var text = require("../styles/text").text
var PropTypes = React.PropTypes;

function Home(props){
  return (
    <div style={position}>
      <h1 style={text}>Enter a City and State</h1>
      <div className='form-group'>
        <input type="text" className='form-control' placeholder='Dallas, Texas'
         onChange={props.onUpdateCity}
         value={props.city} />
       </div>
       <div className='form-group'>
        <button type="submit" className='btn btn-lg btn-success center-block'
        onClick={props.onSubmitCity}>
        Leggo
        </button>
      </div>
    </div>
  )
}

Home.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}
module.exports = Home;
