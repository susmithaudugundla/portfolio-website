import React from 'react';
import TodoItem from './todoItem.js';
import './index.css';


class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			arrayOfTodos:[],
		};
		this.totalTodos=0;
		this.displayItems="";
		this.temp=this.state.arrayOfTodos;
		this.check=[];
	}
	addTodoItem=(event)=>{
		if(event.keyCode===13){
			if(event.target.value==""){
				alert("todo is not valid");
			}
			else{
				this.totalTodos++;
				let value=event.target.value;
				let id=Math.random();
				let object={
					id:id,
					value:value
				}
				let todoItems=this.state.arrayOfTodos.concat(object);
				let checkedObject={
					checked:false,
					id:id,
					value:value
				}
				this.check=this.check.concat(checkedObject)
				this.setState(state=>({
					arrayOfTodos:todoItems
				}));
				event.target.value="";
				this.temp=this.temp.concat(object);
				
			}
		}
		
	}
	remove=(event)=>{
		let index;
		for(let i=0;i<this.state.arrayOfTodos.length;i++){
			if(this.state.arrayOfTodos[i].id===parseFloat(event.target.parentNode.id)){
				this.totalTodos--;
				index=i;
				break;
			}
		}
		this.state.arrayOfTodos.splice(index,1);
		let todoItems=this.state.arrayOfTodos;
		this.setState(state=>({
			arrayOfTodos:todoItems
		}));
		this.temp=this.state.arrayOfTodos;
	}
	isCompleted=(checked,id)=>{
		let index = this.check.findIndex(todo => todo.id === parseFloat(id));
		if(index==-1){
			let object={
			checked:checked,
			id:id
		};
		this.check.push(object);
		}
		else{
			this.check[index].checked=checked;
		}
	
	}
	allTodos=()=>{
		this.setState(state=>({
			arrayOfTodos:this.temp
		}));
	}
	active=()=>{
		
		let array=this.check.filter((todo)=>
			todo.checked===false
		);
		this.setState(state=>({
			arrayOfTodos:array
		}));
		
	}
	completed=()=>{
		
		let array=this.check.filter((todo)=>
			todo.checked===true
		);
		
		this.setState(state=>({
			arrayOfTodos:array
		}));
		
	}
	clearCompleted=()=>{
		let array=[];
		this.check.forEach((todo, index)=>{
			if(todo.checked){
				this.check.splice(index,1);
			}
			else{
				array=array.concat(todo);
			}
		});
		this.temp=array;
		this.setState(state=>({
			arrayOfTodos:array
		}));
		
	}
render(){
		return(
			<div>
			<p className="heading-style">todo list</p>
			<div className="flex-container-col">
			<input type="text" onKeyDown={this.addTodoItem}/>
			<hr/>
			<ul className="flex-container-row">{
				this.state.arrayOfTodos.map((todo)=>
				<TodoItem value={todo.value} remove={this.remove} id={todo.id} key={todo.id} completed={this.isCompleted}/>
			)}
			</ul>
			<div><span>{this.totalTodos} items left</span><button onClick={this.allTodos}>All</button><button onClick={this.active}>Active</button><button onClick={this.completed}>Completed</button><button onClick={this.clearCompleted}>Clear completed</button></div>
			</div>
			</div>
		);
	};
}

export default TodoList;
