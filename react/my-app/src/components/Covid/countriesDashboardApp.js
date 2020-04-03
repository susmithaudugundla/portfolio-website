/*global fetch*/
import React from 'react';
import Countries from './countries.js'
import Header from './header.js';
import CountriesFilterBar from './countriesFilterBar';
import './index.css';
class CountriesDashboardApp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			countries:[],
			selectedTheme:"",
			searchText:"",
			selectedRegion:""
		};
		this.regions=[];
		
	}
	static themeOptions={
			light: {
	        id: "0",
	        name: "#fff"
	      },

	      dark: {
	        id: "1",
	        name: "#2b3945"
	      }
		}
	componentDidMount(){
		this.getCountries();
	}
	async getCountries(){
		let response=await fetch('https://restcountries.eu/rest/v2/all');
    	let jsonData=await response.json();
    	this.tempCountries=jsonData;
    	this.getRegionOptions(jsonData);
    	this.setState({
        	countries:jsonData
       });
	}
	getRegionOptions=(data)=>{
		let regions=data.map((country)=>country["region"]);
		this.regions=regions.filter((item,index,ar)=>ar.indexOf(item)===index);
		console.log(this.regions)
    }
    onChangeTheme=()=>{
    	
    }
    onChangeSearchText=(event)=>{
    	alert(event.target.value)
    	if(event.keyCode==13){
    		let countryName=event.target.value.toUpperCase();
    		alert(countryName);
    		
    	}
    	else{
    		this.setState({searchText:event.target.value})
    	}
    	
    }
    onChangeSelectedRegion=()=>{
    	
    }
    filterCountriesBySelectedRegion=()=>{
    	
    }
    filterCountriesBySearchText=()=>{
    	
    }
	render(){
		return(
			<div>
			<Header changeTheme={this.onChangeTheme}/>
			<CountriesFilterBar text={this.state.searchText} regions={this.regions} selectedRegion={this.state.selectedRegion} selectedTheme={this.state.selectedTheme} onChangeSelectedRegion={this.onChangeSelectedRegion} onChangeSearchText={this.onChangeSearchText}/>
			<Countries countries={this.state.countries}/>
			</div>
			);
	}
}
export default CountriesDashboardApp;