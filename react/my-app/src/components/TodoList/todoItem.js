import React from 'react';
import './index.css';
class TodoItem extends React.Component{
	constructor(props){
		super(props);
		this.state={
			check:false,
			contentEditable:false
		};
		this.completed=props.completed;
		this.todoItem=props.value;
		this.id=props.id;
		this.remove=props.remove;
	}
	handleBlur=()=>{
		this.setState(state=>({
			contentEditable:false
		}));
	}
	clearTodo=(event)=>{
		if(this.state.check){
			this.setState(state=>({
			check:false
		}));	
	this.completed(false,event.target.parentNode.id);
		}
		else{
			this.setState(state=>({
			check:true
		}));
		this.completed(true,event.target.parentNode.id);
		}
		
	}
	edit=()=>{
		if(!this.state.check){
			this.setState(state=>({
			contentEditable:true
		}));	
	}
		}
		some=()=>{
			return("hii");
		}
	
	render(){
		console.log(this.state.check);
		return(
			<li id={this.id}>
				<input className="checkbox-properties" type="checkbox" onChange={this.clearTodo} defaultChecked={this.state.check}/>
				<span onClick={this.edit} onBlur={this.handleBlur} contentEditable={this.state.contentEditable}>{this.todoItem}</span>
				<i onClick={this.remove}>{"×"}</i>
			</li>
			);
	}
}
export default TodoItem;
