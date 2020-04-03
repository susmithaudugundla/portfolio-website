import React from "react";
import './index.css';
import backIcon from './back-icon.svg';
import { withRouter } from "react-router";
import NavBar from './navBar.js';

class Greetings extends React.Component{
  constructor(props){
    super(props);
    this.state={
      userName:'',
      displayName:''
    }
  }
  handleUserInput=(event)=>{
    this.setState({userName:event.target.value})
  }
  handleSubmit=(event)=>{
    this.setState(state=>({
      displayName:`Hello ${this.state.userName}, have a nice day`
    }))
    this.displayMessage();
    event.preventDefault();
  }
  displayMessage=()=>{
    this.setState({
      userName:""
    })
  }
  render(){
    return(
      <div>
      <NavBar title="Greetings" h={this.props.history}/>
      <div className="greeting-division">
      <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.userName} onChange={this.handleUserInput}/>
      <input type="submit" value="submit"/>
      </form>
      <p>{this.state.displayName}</p>
      </div>
      </div>
      );
  }
}
export default Greetings;