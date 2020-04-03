const fiirstEl = document.getElementById("one");
const secondEl = document.getElementById("two");
const thirdEl = document.getElementById("three");
/*fiirstEl.onclick = (event) => {

	console.log("First element");
	console.log(event.currentTarget);
}
/*secondEl.onclick = (event) => {

	console.log("second element");
	console.log(event.currentTarget);
}*/
/*thirdEl.onclick = (event) => {

	console.log("third element");
	console.log(event.target);
}*/
/*secondEl.addEventListener('click', () => {

	console.log("second element");
	console.log(event.target);
}, true);
/*document.getElementById("body").onclick = (event) => {
	let id = event.target.id;
	console.log(id);
	document.getElementById(id).style.background = "red";
};
*/
fiirstEl.addEventListener("click", () => {
	console.log("First Division");
	console.log(event.currentTarget);
}, true);
secondEl.addEventListener("click", () => {
	console.log("second division");
	console.log(event.currentTarget);
}, true);
thirdEl.addEventListener("click", () => {
	console.log("third division");
	console.log(event.currentTarget);
}, true);
