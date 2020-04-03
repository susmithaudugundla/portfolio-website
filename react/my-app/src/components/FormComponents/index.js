import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import NavBar from './navBar.js';
import Greetings from './greetings.js';
import { withRouter } from "react-router";

class FormComponents extends React.Component{
  render(){
  return (
  	<div>
  	<NavBar title="Form Components" h={this.props.history}/>
          <ul>
          <li>
          <Link to="/Greetings">Greetings</Link>
          </li>
          <li>
          <Link to="/FavouriteDessert">Favourite Dessert</Link>
          </li>
          <li>
          <Link to="/VisitedCities">Visited Cities</Link>
          </li>
          <li>
          <Link to="/YourState">Your State</Link>
          </li>
          <li>
          <Link to="/DisableButton">Disable Button</Link>
          </li>
          
          </ul>
       
        </div>
  );
}
}
export default withRouter(FormComponents);