import React from 'react';
import NavBar from './navBar.js';
import './index.css';
class FavouriteDessert extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isDisableButtonChecked:false,
			showMessage:''
		};
	}
	handleChange=(event)=>{
		if(this.state.isDisableButtonChecked){
			this.setState({
			isDisableButtonChecked:!this.state.isDisableButtonChecked,
			showMessage:""
		})
		}
		else{
			this.setState({
			isDisableButtonChecked:!this.state.isDisableButtonChecked,
			showMessage:"I am disabled"
		})
		}
		
	}
	handleSubmit=(event)=>{
		this.displayMessage();
		event.preventDefault()
	}
	displayMessage=()=>{
		this.setState({showMessage:"I am enabled"});
	}
	render(){
		return(
			<div>
		      <NavBar title="Disable Button" h={this.props.history}/>
		      <div className="disable-division">
		      <form onSubmit={this.handleSubmit}>
		      <input type="checkbox" onChange={this.handleChange}/>Disable
		      <button disabled={this.state.isDisableButtonChecked}>Click me</button>
		      </form>
		      <p>{this.state.showMessage}</p>
		      </div>
		    </div>
			);
	}

}
export default FavouriteDessert;