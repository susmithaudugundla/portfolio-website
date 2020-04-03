import React from 'react';
import './index.css';
import { withRouter } from "react-router";
import backIcon from './back-icon.svg';
class NavBar extends React.Component{
	constructor(props){
		super(props)
	}
	goBack=()=>{
  	this.props.history.goBack();
  }
	render(){
		return(
			<div onClick={this.goBack} className="back-division">
  	<img src={backIcon} alt="back"/>
  	<span>{this.props.title}</span>
  	</div>
    
			);
	}
}
export default withRouter(NavBar);