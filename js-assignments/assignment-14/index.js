let addCarBtn = document.getElementById("addCar");
let divisionEl = document.getElementById("division");
let runningStatusOfCar = "running";
let startBtnBackground = "green";
let stopBtnBackground = "red";
let idleStatusOfCar = "idle";
let acceleratorBtnBackground = "blue";
let decceleratorBtnBackground = "red";
let activeBtnFontColor = "#ffffff";
let disabledBtnBackground = "#f2f2f2";
let arrayOfCarObjects = [];
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
addCarBtn.onclick = () => {
    let idObject = {
        start: Math.random(),
        accelerator: Math.random(),
        deccelerator: Math.random(),
        text: Math.random(),
        car: new Car(idleStatusOfCar, 0),
        carDivision: Math.random(),
        close: Math.random()
    };
    let newCar = `<div id=${idObject.carDivision}><div><button id=${idObject.start} class=start>Start</button><i class="fa fa-close" id=${idObject.close}></i></div><p>Status:<span  id=${idObject.text}>Stopped</span></p><div><button id=${idObject.accelerator} class=accelerator disabled>Accelerator</button><button id=${idObject.deccelerator} class=deccelerator disabled>Deccelerator</button></div></div><hr>`;
    divisionEl.innerHTML += newCar;
    arrayOfCarObjects.push(idObject);
};
let idObject = {
    start: "start",
    accelerator: "accelerator",
    deccelerator: "deccelerator",
    text: "carStatus",
    car: new Car(idleStatusOfCar, 0),
    carDivision: "carDivision",
    close: "close"
};
arrayOfCarObjects.push(idObject);

divisionEl.addEventListener('click', () => {
    let id = event.target.className;
    let i = 0;
    switch (id) {
        case 'start':
            for (i = 0; i < arrayOfCarObjects.length; i++) {
                if (event.target.id == arrayOfCarObjects[i].start) {
                    break;
                }
            }
            if (arrayOfCarObjects[i].car.currentStatus === idleStatusOfCar) {
                arrayOfCarObjects[i].car.currentStatus = runningStatusOfCar;
            }
            else {
                arrayOfCarObjects[i].car.currentStatus = idleStatusOfCar;
            }
            changeUIAccordingToStatusOfTheCar(arrayOfCarObjects[i].car, event.target.id, arrayOfCarObjects[i].accelerator, arrayOfCarObjects[i].deccelerator, arrayOfCarObjects[i].text);
            break;
        case 'accelerator':
            for (i = 0; i < arrayOfCarObjects.length; i++) {
                if (event.target.id == arrayOfCarObjects[i].accelerator) {
                    break;
                }
            }
            arrayOfCarObjects[i].car.pressAccelerator();
            changeCurrectSpeedInUI(arrayOfCarObjects[i].car, arrayOfCarObjects[i].deccelerator, arrayOfCarObjects[i].text);
            break;
        case 'deccelerator':
            for (i = 0; i < arrayOfCarObjects.length; i++) {
                if (event.target.id == arrayOfCarObjects[i].deccelerator) {
                    break;
                }
            }
            arrayOfCarObjects[i].car.pressDeccelerator();
            changeCurrectSpeedInUI(arrayOfCarObjects[i].car, event.target.id, arrayOfCarObjects[i].text);
            break;
        case 'fa fa-close':
            for (i = 0; i < arrayOfCarObjects.length; i++) {
                if (event.target.id == arrayOfCarObjects[i].close) {
                    break;
                }
            }
            deleteCar(arrayOfCarObjects[i].carDivision);
            arrayOfCarObjects.splice(i, 1);
            break;
        default:
    }
});

function deleteCar(division) {
    document.getElementById(division).style.display = "none";
}

function changeUIAccordingToStatusOfTheCar(carObject, id, accelerator, deccelerator, text) {
    let btnId = document.getElementById(id);
    let acceleratorBtn = document.getElementById(accelerator);
    let decceleratorBtn = document.getElementById(deccelerator);
    let textEl = document.getElementById(text);
    if (carObject.currentStatus === idleStatusOfCar) {
        btnId.style.background = startBtnBackground;
        btnId.innerHTML = "start";
        textEl.innerHTML = "Stopped"
        acceleratorBtn.disabled = true;
        decceleratorBtn.disabled = true;
        acceleratorBtn.style.color = acceleratorBtnBackground;
        decceleratorBtn.style.color = decceleratorBtnBackground
        acceleratorBtn.style.background = disabledBtnBackground;
        decceleratorBtn.style.background = disabledBtnBackground;
    }
    else {
        btnId.style.background = stopBtnBackground;
        btnId.innerHTML = "stop";
        textEl.innerHTML = "Running";
        acceleratorBtn.disabled = false;
        acceleratorBtn.style.background = acceleratorBtnBackground;
        acceleratorBtn.style.color = activeBtnFontColor;
    }
}

function changeCurrectSpeedInUI(carObject, deccelerator, text) {
    let decceleratorBtn = document.getElementById(deccelerator);
    let textEl = document.getElementById(text);
    if (carObject.speed > 0) {
        decceleratorBtn.disabled = false;
        decceleratorBtn.style.background = decceleratorBtnBackground;
        decceleratorBtn.style.color = activeBtnFontColor;
        textEl.innerHTML = `Running with speed ${carObject.speed}kmph`;
    }
    else {
        decceleratorBtn.disabled = true;
        decceleratorBtn.style.color = decceleratorBtnBackground;
        decceleratorBtn.style.background = disabledBtnBackground;
        textEl.innerHTML = "Running";
    }
}
