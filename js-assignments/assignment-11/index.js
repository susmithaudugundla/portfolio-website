let startBtn = document.getElementById("start");
let acceleratorBtn = document.getElementById("accelerator");
let decceleratorBtn = document.getElementById("deccelerator");
let carStatusEl = document.getElementById("carStatus");
let runningStatusOfCar = "running";
let startBtnBackground = "green";
let stopBtnBackground = "red";
let idleStatusOfCar = "idle";
let activeBtnBackground = "blue";
let disabledBtnBackground = "#f2f2f2";
class Car {
	constructor(currentStatus, speed) {
		this.currentStatus = currentStatus;
		this.speed = speed;
	}
	pressAccelerator() {
		this.speed = this.speed + 10;
	}
	pressDeccelerator() {
		this.speed = this.speed - 10;
	}
}
let carObject = new Car(idleStatusOfCar, 0);
startBtn.onclick = () => {
	if (carObject.currentStatus === idleStatusOfCar) {
		carObject.currentStatus = runningStatusOfCar;
		changeUIAccordingToStatusOfTheCar();
	}
	else {
		carObject.currentStatus = idleStatusOfCar;
		changeUIAccordingToStatusOfTheCar();
	}
	window.localStorage.setItem("carSpeed", JSON.stringify(carObject));
}

function changeUIAccordingToStatusOfTheCar() {
	if (carObject.currentStatus === idleStatusOfCar) {
		startBtn.style.background = startBtnBackground;
		startBtn.innerHTML = "start";
		carStatusEl.innerHTML = "Stopped"
		acceleratorBtn.disabled = true;
		decceleratorBtn.disabled = true;
		acceleratorBtn.style.background = disabledBtnBackground;
		decceleratorBtn.style.background = disabledBtnBackground;
	}
	else {
		startBtn.style.background = stopBtnBackground;
		startBtn.innerHTML = "stop";
		carStatusEl.innerHTML = "Running";
		acceleratorBtn.disabled = false;
		acceleratorBtn.style.background = activeBtnBackground;
	}
}
acceleratorBtn.onclick = () => {
	carObject.pressAccelerator();
	changeCurrectSpeedInUI();
	window.localStorage.setItem("carSpeed", JSON.stringify(carObject));
}
decceleratorBtn.onclick = () => {
	carObject.pressDeccelerator();
	changeCurrectSpeedInUI();
	window.localStorage.setItem("carSpeed", JSON.stringify(carObject));
}

function changeCurrectSpeedInUI() {
	if (carObject.speed > 0) {
		decceleratorBtn.disabled = false;
		decceleratorBtn.style.background = activeBtnBackground;
		carStatusEl.innerHTML = `Running with speed ${carObject.speed}kmph`;
	}
	else {
		decceleratorBtn.disabled = true;
		decceleratorBtn.style.background = disabledBtnBackground;
		carStatusEl.innerHTML = "Running";
	}
}
carObject = JSON.parse(window.localStorage.getItem("carSpeed"));
console.log(carObject);
changeUIAccordingToStatusOfTheCar();
console.log("hii");
changeCurrectSpeedInUI();
