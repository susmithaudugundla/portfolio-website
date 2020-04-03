import React from 'react';
import NavBar from './navBar.js';
import './index.css';
class FavouriteDessert extends React.Component{
	constructor(props){
		super(props);
		this.state={
			selectedDessert:'',
			favouriteDessert:''
		};
		this.favouriteDesserts=this.props.favouriteDesserts;
	}
	handleChange=(event)=>{
		this.setState({selectedDessert:event.target.value})
	}
	handleSubmit=(event)=>{
		this.displayMessage();
		event.preventDefault()
	}
	displayMessage=()=>{
		this.setState({favouriteDessert:`My favourite Dessert is ${this.state.selectedDessert.toUpperCase()}`});
	}
	render(){
		return(
			<div>
		      <NavBar title="Favourite Desserts" h={this.props.history}/>
		      <div className="dessert-division">
		      <p>What is your favourite dessert?</p>
		      <form onSubmit={this.handleSubmit}>
		      <div>{this.favouriteDesserts.map((dessert)=><div className="margin"><label><input type="radio" name="desserts" value={dessert} onChange={this.handleChange}/>{dessert}</label></div>)}</div>
		      <input type="submit" value="submit"/>
		      </form>
		      <p>{this.state.favouriteDessert}</p>
		      </div>
		    </div>
			);
	}

}
export default FavouriteDessert;