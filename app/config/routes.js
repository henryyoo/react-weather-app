var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hasHistory = ReactRouter.hasHistory;
var IndexRoute = ReactRouter.IndexRoute;
var MainContainer = require("../containers/MainContainer");
var HomeContainer = require("../containers/HomeContainer");
var ForecastContainer = require("../containers/ForecastContainer");
var DetailsContainer = require("../containers/DetailsContainer");

var routes= (
  <Router history = {hasHistory}>
    <Route path = "/" component ={MainContainer}>
      <IndexRoute component ={HomeContainer} />
      <Route path="/forecast/:city" component={ForecastContainer} />
      <Route path='/details/:city' component={DetailsContainer} />
    </Route>
  </Router>
)

module.exports = routes;
