import React from 'react';
import NavBar from './navBar.js';
import './index.css';
import CheckboxWithLabel from './checkboxWithLabel.js';
class VisitedCities extends React.Component{
	constructor(props){
		super(props);
		this.state={
			visitedCities:[],
			selectedCities:[],
			cityOptions:[]
		};
		this.cities=this.props.cities;
	}
	handleChange=(event)=>{
		if(event.target.checked===true){
			this.state.cityOptions.push(event.target.value);
			this.setState({visitedCities:this.state.cityOptions});
		}
		else{
			let index=this.state.visitedCities.findIndex((element)=>element===event.target.value);
			this.state.visitedCities.splice(index,1);
		}
	}
	handleSubmit=(event)=>{
		this.displayMessage();
		event.preventDefault();
	}
	displayMessage=()=>{
		this.setState({selectedCities:`I have visited these cities ${this.state.visitedCities}`});
	}
	render(){
		console.log(this.state.cityOptions);
		return(
			<div>
		      <NavBar title="Visited Cities" h={this.props.history}/>
		      <div className="dessert-division">
		      <p>What is your favourite dessert?</p>
		      <form onSubmit={this.handleSubmit}>
		      <div>{this.cities.map((city)=><CheckboxWithLabel value={city} change={this.handleChange}/>)}</div>
		      <input type="submit" value="submit"/>
		      </form>
		      <p>{this.state.selectedCities}</p>
		      </div>
		    </div>
			);
	}
}
export default VisitedCities;