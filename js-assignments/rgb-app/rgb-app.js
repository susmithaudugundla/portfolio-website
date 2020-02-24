function changeColorToBlue(division) {
    document.getElementById(division).style.background = "blue";
}

function changeColorToGreen(division) {
    document.getElementById(division).style.background = "green";
}

function changeColorToRed(division) {
    document.getElementById(division).style.background = "red";
}

function onClickMoveLeft(leftDivision) {
    let currentDivision = document.getElementById(leftDivision);
    let nextDivision = document.getElementById("right-division");
    currentDivision.style.order = 0;
    nextDivision.style.order = 1;
}

function onClickMoveRight(leftDivision) {
    let currentDivision = document.getElementById(leftDivision);
    let nextDivision = document.getElementById("right-division");
    currentDivision.style.order = 1;
    nextDivision.style.order = 0;
}

function onClickMoveUp(moveUp) {
    let previusHeight = document.getElementById(moveUp).offsetHeight;

    previusHeight = previusHeight - 10;

    document.getElementById(moveUp).style.height = previusHeight + "px";
}

function onClickMoveDown(moveDown) {
    let previusHeight = document.getElementById(moveDown).offsetHeight;
    previusHeight = previusHeight + 10;
    document.getElementById(moveDown).style.height = previusHeight + "px";
}

function onClickSwapUp(currentDivision, previusDivision) {
    let previusDivisionElement = document.getElementById(previusDivision);
    let previusDivisionBackground = window.getComputedStyle(previusDivisionElement, null).getPropertyValue("background-color");
    let currentDivisionElement = document.getElementById(currentDivision);
    let currentDivisionBackground = window.getComputedStyle(currentDivisionElement, null).getPropertyValue("background-color");
    previusDivisionElement.style.backgroundColor = `${currentDivisionBackground}`;
    currentDivisionElement.style.backgroundColor = `${previusDivisionBackground}`;

}

function onClickSwapDown(currentDivision, nextDivision) {

    let nextDivisionElement = document.getElementById(nextDivision);
    let nextDivisionBackground = window.getComputedStyle(nextDivisionElement, null).getPropertyValue("background-color");
    let currentDivisionElement = document.getElementById(currentDivision);
    let currentDivisionBackground = window.getComputedStyle(currentDivisionElement, null).getPropertyValue("background-color");
    nextDivisionElement.style.backgroundColor = `${currentDivisionBackground}`;
    currentDivisionElement.style.backgroundColor = `${nextDivisionBackground}`;
}
/*document.getElementById("top-right-division").style.order = 0;
document.getElementById("middle-right-division").style.order = 1;
document.getElementById("bottom-right-division").style.order = 2;

function onClickSwapUp(elem) {

    let currentDivision = elem.parentNode.parentNode.getAttribute("id");
    let previusDivision = document.getElementById(currentDivision).previousElementSibling.getAttribute("id");
    
    let temp = window.getComputedStyle(document.getElementById(currentDivision), null).getPropertyValue("order");
    document.getElementById(currentDivision).style.order = window.getComputedStyle(document.getElementById(previusDivision), null).getPropertyValue("order");
    document.getElementById(previusDivision).style.order = temp;
    alert(document.getElementById("middle-right-division").style.order);

}

/*function onClickSwapDown(elem) {
    let currentDivision = elem.parentNode.parentNode.getAttribute("id");
    let nextDivision = document.getElementById(currentDivision).nextSibling.getAttribute("id");
    let temp = window.getComputedStyle(document.getElementById(currentDivision), null).getPropertyValue("order");
    document.getElementById(currentDivision).style.order = window.getComputedStyle(document.getElementById(nextDivision), null).getPropertyValue("order");
    document.getElementById(nextDivision).style.order = temp;
}*/
