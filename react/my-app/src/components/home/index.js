import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withRouter } from "react-router";
class Appp extends React.Component{
  s=()=>{
    this.props.history.push("/FormComponents")
  }
  render(){
  return (
      <div>
      <li>
          <Link to="/">HOME</Link>
          </li>
          <ul>
          <li>
          <Link to="/CarsList">CarsList</Link>
          </li>
          <li>
          <Link to="/CountriesDashboardApp">CountriesDashboardApp</Link>
          </li>
          <li>
          <Link to="/TodosList">TodoList</Link>
          </li>
          <li onClick={this.s}>
          <Link to="/FormComponents">Form Components</Link>
          </li>
          </ul>
        </div>
  );
}
}
export default withRouter(Appp);