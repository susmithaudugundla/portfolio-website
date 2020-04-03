import React from 'react';
import './index.css';
class Card extends React.Component{
	constructor(props){
		super(props);
		this.card=props.card;
	}
	render(){
		return(
			<div className="country">
			<div>
			<img src={this.card.flag} alt="country-flag"/>
			<p>{this.card.name}</p>
			</div>
			</div>
			
			);
	}
}
export default Card;