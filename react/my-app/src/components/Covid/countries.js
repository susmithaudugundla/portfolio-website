import React from 'react';
import Card from './card.js';
import './index.css';
class Countries extends React.Component{
	constructor(props){
		super(props);
		
	}
	render(){
		
		return(
			<div className="card">
			{
				this.props.countries.map((country)=>
			<Card card={country}/>
			)
			}
			
			</div>
			
			);
	}
}
export default Countries;