import React from 'react';
import SearchText from './searchText.js';
import SelectRegion from './selectRegion.js'
class CountriesFilterBar extends React.Component{
	constructor(props){
		super(props);
		
		this.regions=props.regions;
		this.selectedRegion=props.selectedRegion;
		this.selectedTheme=props.selectedTheme;
		this.onChangeSelectedRegion=props.onChangeSelectedRegion;
		this.onChangeSearchText=props.onChangeSearchText;
		
	}
	render(){
		return(
			<div>
			<SearchText text={this.props.text} onChangeSearchText={this.onChangeSearchText}/>
			<SelectRegion regions={this.regions} selectedRegion={this.selectedRegion} onChangeSelectedRegion={this.onChangeSelectedRegion}/>
			</div>
			);
	}
}
export default CountriesFilterBar;
