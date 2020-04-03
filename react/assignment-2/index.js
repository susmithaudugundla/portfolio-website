/*global ReactDOM,React*/
/*class Car extends React.Component{
	constructor(props){
		super(props);
		console.log("hello")
		this.state={
			status:"Stopped",
			speed:0,
			accelerateBtn: true,
			breakBtn:true
		};
		this.id=props.id;
		this.remove=props.remove.bind(this);
		
    }
	onStartOrStop=()=>{
		{
			this.state.status!=="Stopped" ? 
				this.setState(state=>({
				status:"Stopped",
				accelerateBtn:true,
				breakBtn:true
			}))
			:
			this.setState(state=>({
				status:"Running",
				accelerateBtn:false,
				breakBtn:true
			}));
		}
	}
	onApplyBrake=()=>{
		{this.state.speed===10 && this.setState(state=>({
			breakBtn:!this.state.breakBtn,
			status:"Running"
		}));
		}
		
		this.setState(state=>({
			speed: this.state.speed-10
		}),()=>{{this.state.speed>0 && this.displayStatusText();}});
	}
	onAccelerate=()=>{
		this.setState(state=>({
			speed: this.state.speed+10,
			breakBtn:false
		}),()=>{this.displayStatusText();});
	}
	displayStatusText(){
		this.setState(state=>({
			status:`Running with speed ${this.state.speed}kmph`
		}));
	}
	render(){
		return(
			<div>
				<button className="start" onClick={this.onStartOrStop}>Start</button>
				<i class="fa fa-close" onClick={this.remove}></i>
				<p>{this.state.status}</p>
				<div className="margin">
				<button className="accelerate" onClick={this.onAccelerate} disabled={this.state.accelerateBtn}>Accelerator</button>
				<button className="break" onClick={this.onApplyBrake} disabled={this.state.breakBtn}>Break</button>
				</div>
			</div>
			);
	}
}

class CarsList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			cars:[]
		}
		console.log("constructor");
	}
	addCarToCarList=()=>{
		console.log("adding ");
		let id=Math.random();
		let carConcat=this.state.cars.concat(id);
		this.setState(state=>({
			cars:carConcat
		}));
	}
	removeCarFromCarsList=(id)=>{
		console.log(this.state.cars);
		let removeCar=this.state.cars.map((car,index)=>
		{
			if(id===car){
			    this.state.cars.splice(index,1)
			}
		});
		console.log(this.state.cars);
	}
	renderCarsList=()=>{
	}
	render(){
		return(
			<div>
				<button id="addCar" className="add-car" onClick={this.addCarToCarList}>Add Car</button>
				<div>{this.state.cars.map((car,index)=>
					<div><p>Car-{index+1}</p>
					<Car id={car} key={index} remove={this.removeCarFromCarsList}/>
					</div>
					)}
				</div>
			</div>
		);
	}
}
ReactDOM.render(<CarsList/>,document.getElementById("root"));
*/

class Count extends React.Component{
	constructor(props){
		super(props);
		this.state={
			parentCount:0
		}
		console.log("hello");
	}
	
	componentWillMount(){
		console.log("hii");
	}
	inc=()=>{
		console.log(this.state.parentCount);
		this.setState({parentCount:this.state.parentCount+1})
	}
	/*inc=()=>{
		this.setState(state=>({count:state.count+1}));
		console.log(this.state.count);
		this.setState(state=>({count:state.count+1}));
		console.log(this.state.count);
		this.setState(state=>({count:state.count+1}));
		console.log(this.state.count);
	}*/
	render(){
		console.log("wotld");
		return(
			<h1>hii</h1>
			)
	}
}
function some(props){
	console.log(typeof props);
	return <h1>hii</h1>; 
}
console.log(typeof React)
ReactDOM.render(<Count/>,document.getElementById("root"));
