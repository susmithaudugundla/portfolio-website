import React from 'react';
import NavBar from './navBar.js';
import './index.css';
class YourState extends React.Component{
	constructor(props){
		super(props);
		this.state={
			selectedState:'',
			submittedState:''
		};
		this.states=this.props.states;
	}
	handleChange=(event)=>{
		this.setState({selectedState:event.target.value})
	}
	handleSubmit=(event)=>{
		this.displayMessage();
		event.preventDefault();
	}
	displayMessage=()=>{
		this.setState({submittedState:`I am from ${this.state.selectedState} state`});
	}
	render(){
		return(
			<div>
		      <NavBar title="Your State" h={this.props.history}/>
		      <div className="dessert-division">
		      <form onSubmit={this.handleSubmit}>
		      <select className="margin" onChange={this.handleChange}>
		      <option value="Select your state">Select your state</option>
		      {this.states.map((state)=><option value={state} key={state} >{state}</option>)}
		      </select>
		      <br/>
		      <input type="submit" value="submit"/>
		      </form>
		      <p>{this.state.submittedState}</p>
		      </div>
		    </div>
			);
	}

}
export default YourState;