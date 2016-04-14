var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hasHistory = ReactRouter.hasHistory;
var IndexRoute = ReactRouter.IndexRoute;
var MainContainer = require("../containers/Main");
var HomeContainer = require("../containers/Home");

var routes= (
  <Router history = {hasHistory}>
    <Route path = "/" component ={MainContainer}>
      <IndexRoute component ={HomeContainer} />
    </Route>
  </Router>
)

module.exports = routes;
