import React from 'react';
class SearchText extends React.Component{
	constructor(props){
		super(props);
		
		this.onChangeSearchText=props.onChangeSearchText;
		
	}
	render(){
		return(
			<input type="text" value={this.props.text} onChange={this.onChangeSearchText}/>
			)
		
	}
}
export default SearchText;