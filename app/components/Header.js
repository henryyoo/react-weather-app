var React = require('react');
var style = require('../styles/text')
var Header = React.createClass({
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
  <nav className="navbar navbar-default" style={style.header}>
    <div className="container-fluid" >
      <div className="navbar-header">
        <h3 style={style.text}>Henrys Weather App</h3>
      </div>
      <form className="navbar-form navbar-right" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Dallas, Texas" onChange={this.handleUpdateCity}/>
        </div>
        <button type="submit" onClick={this.handleSubmitCity} className="btn btn-default btn-success">Leggo</button>
      </form>
    </div>
  </nav>
  )
}
});

module.exports = Header;
