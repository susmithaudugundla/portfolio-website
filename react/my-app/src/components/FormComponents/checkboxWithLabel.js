import React from 'react';
import './index.css';
class CheckboxWithLabel extends React.Component{
	constructor(props){
		super(props);
		this.city=props.value;
		this.handleChange=props.change;
	}
	render(){
		return(
			<div className="margin"><label><input type="checkbox" value={this.city} onClick={this.handleChange}/>{this.city}</label></div>
			);
	}
}
export default CheckboxWithLabel;