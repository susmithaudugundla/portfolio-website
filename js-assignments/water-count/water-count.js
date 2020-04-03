let glass = {
    arrayOfGlasses: [{ filled: "false", id: "glassOne" }, { filled: "false", id: "glassTwo" }, { filled: "false", id: "glassThree" }, { filled: "false", id: "glassFour" }, { filled: "false", id: "glassFive" }, { filled: "false", id: "glassSix" }, { filled: "false", id: "glassSeven" }, { filled: "false", id: "glassEight" }]
};
let lengthOfGlasses = glass.arrayOfGlasses.length;
let glassStateFilled = "true";
let glassStateUnfilled = "false";
let backgrounColorOfFilledGlass = "#07b3f7";
let backgrounColorOfUnfilledGlass = "#ffffff";
let numberOfGlassesFilled = 0;
let glassContainerElement = document.getElementById("glassContainer");
let waterGlassContainerElement = document.getElementById("waterGlassContainer");
let filledWaterElement = document.getElementById("filledWater");
let infoElement = document.getElementById("info");
glassContainerElement.onclick = (event) => {
    let idOfBtn = event.target.id;
    for (let i = 0; i < lengthOfGlasses; i++) {
        console.log(glass.arrayOfGlasses);
        if (idOfBtn === glass.arrayOfGlasses[i].id) {

            if (glass.arrayOfGlasses[i].filled === "false") {
                glass.arrayOfGlasses[i].filled = glassStateFilled;
                changeGlassObjectToFillGlass(idOfBtn);
            }
            else {
                changeGlassObjectToUnfilGlass(idOfBtn);
            }
            break;
        }
    }
}

function changeUIToFillGlasses() {
    let i;
    for (i = 0; i < lengthOfGlasses && glass.arrayOfGlasses[i].filled == glassStateFilled; i++) {
        document.getElementById(glass.arrayOfGlasses[i].id).style.background = backgrounColorOfFilledGlass;
    }

    changeGlassContainerToFill(i);
}

function changeGlassContainerToFill(lastGlassFilled) {
    let waterQuantity = lastGlassFilled * 12.5;
    let infoElementHeight = (lengthOfGlasses - lastGlassFilled + 2) * 25;
    infoElement.style.height = `${infoElementHeight}px`;
    waterGlassContainerElement.style.height = `${waterQuantity}%`;
    waterGlassContainerElement.style.top = `${100-waterQuantity}%`;
    if (waterQuantity) {
        filledWaterElement.innerHTML = `${waterQuantity}%`;
    }
    else {
        filledWaterElement.innerHTML = ``;
    }
    infoElement.innerHTML = `${2-(lastGlassFilled*0.25)}L<br> Remained`;
}

function changeGlassObjectToFillGlass(btnId) {
    let i;
    for (i = 0; glass.arrayOfGlasses[i].id != btnId; i++) {
        glass.arrayOfGlasses[i].filled = glassStateFilled;
    }
    window.localStorage.setItem("glassState", JSON.stringify(glass));
    changeUIToFillGlasses();
}

function changeUIToUnfillGlasses() {
    let i;
    for (i = lengthOfGlasses - 1; i > -1 && glass.arrayOfGlasses[i].filled == glassStateUnfilled; i--) {
        document.getElementById(glass.arrayOfGlasses[i].id).style.background = backgrounColorOfUnfilledGlass;
    }
    changeGlassContainerToFill(i + 1);
}

function changeGlassObjectToUnfilGlass(btnId) {
    let i;
    for (i = lengthOfGlasses - 1; glass.arrayOfGlasses[i].id != btnId; i--) {
        if (glass.arrayOfGlasses[i].filled === glassStateFilled) {
            numberOfGlassesFilled++;
        }
        glass.arrayOfGlasses[i].filled = glassStateUnfilled;
    }
    if (numberOfGlassesFilled === 0) {
        glass.arrayOfGlasses[i].filled = glassStateUnfilled;
        i--;
    }
    window.localStorage.setItem("glassState", JSON.stringify(glass));
    changeUIToUnfillGlasses();
    numberOfGlassesFilled = 0;
}
if (window.localStorage.getItem("glassState") !== null) {
    glass = JSON.parse(window.localStorage.getItem("glassState"));

    changeUIToFillGlasses();

}