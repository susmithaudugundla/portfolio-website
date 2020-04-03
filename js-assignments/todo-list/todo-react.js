/*global ReactDOM React*/
class TodoItem extends React.Component{
	constructor(props){
		super(props);
		this.state={
			check:false,
		texDecoration:"text-decoration-none"
		}
		this.todoItem=props.value;
		this.id=props.id;
		
	}
	clearTodo=()=>{
		this.check=!this.check;
		if(this.check){
			this.setState(state=>({
			check:true,
			texDecoration:"text-decoration-strike"
		}));
		}
	}
	render(){
		console.log("hii");
		return(
			<div>
				<input type="checkbox" onChange={this.clearTodo} checked={this.state.check}/>
				<span className={this.state.texDecoration}>{this.todoItem}</span>
				<span>{"×"}</span>
			</div>
			);
	}
}

class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			arrayOfTodos:[]
		};
		
	}
	addTodoItem=()=>{
		if(event.keyCode===13){
			let id=Math.random();
		let todoItems=this.state.arrayOfTodos.concat(id);
		this.setState(state=>({
			arrayOfTodos:todoItems
		}));
		event.target.value="";
		}
			
	}
	render(){
	
		return(
			<div>
			<input type="text" onKeyDown={this.addTodoItem}/>
			<ul>{
				this.state.arrayOfTodos.map((todo,index)=>
				<li><TodoItem value={event.target.value} id={todo} key={index}/></li>
			)}
			</ul>
			</div>
		);
	};
}

ReactDOM.render(<TodoList/>,document.getElementById("root"));