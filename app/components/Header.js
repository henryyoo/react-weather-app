var React = require('react');
var style = require('../styles/text')
function Header(props){
  return (
  <nav className="navbar navbar-default" style={style.header}>
    <div className="container-fluid" >
      <div className="navbar-header">
        <h3 style={style.text}>Henrys Weather App</h3>
      </div>
      <form className="navbar-form navbar-right" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Dallas, Texas" />
        </div>
        <button type="submit" className="btn btn-default btn-success">Leggo</button>
      </form>
    </div>
  </nav>
  )
}

module.exports = Header;
