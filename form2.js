const submitBtn = document.getElementById("submitBtn");
const name = document.getElementById("name");
const password = document.getElementById("password");
const toDoItemElement = document.getElementById("toDoItem");
const toDoListElement = document.getElementById("toDoList");
submitBtn.onclick = () => {
	console.log("submit button clicked");
}
let arr = [];
let i = 0;

toDoItemElement.onkeydown=(event)=>{
	if(event.keyCode===13){
		if(event.target.value===""){
			alert("wrong");
		}
		else{
			
			let item=`<li>${event.target.value}</li>`;
			toDoListElement.innerHTML+=item;
			event.target.value="";
		}
	}
}
//window.localStorage(arr);
/*toDoItemElement.onkeydown = (event) => {
	if (event.keyCode === 13) {
		if (event.target.value === "") {
			alert("You can't add empty todo");
		}
		else {

			let createListItem = document.createElement("li");
			createListItem.setAttribute("name", "listitems");
			let toDoItemText = document.createElement("span");
			toDoItemText.setAttribute('name', 'edit');
			toDoItemText.setAttribute('onmouseover', 'editable()');
			let checkBox = document.createElement("input");
			checkBox.setAttribute('type', 'checkbox');
			checkBox.setAttribute('name', 'checkbox');
			checkBox.setAttribute('class', 'checkbox-properties');
			checkBox.setAttribute('onclick', 'checkedOrNot()');
			let text = document.createTextNode(toDoItemElement.value);
			let spanDelete = document.createElement("span");
			let deleteIcon = document.createTextNode("×");
			spanDelete.className = "display-or-none";
			spanDelete.setAttribute('onmouseover', 'displayOrNone()');
			spanDelete.appendChild(deleteIcon);
			toDoItemText.appendChild(text);
			createListItem.appendChild(checkBox);
			createListItem.appendChild(toDoItemText);
			createListItem.appendChild(spanDelete);
			toDoListElement.insertBefore(createListItem, toDoListElement.children[1]);
			toDoItemElement.value = "";
			window.localStorage.setItem("item" + i, createListItem.innerHTML);
			i = i + 1;
			window.localStorage.setItem("index", i);
		}
	}
}
toDoListElement.onclick = () => {
	let check = document.querySelectorAll("li");
	console.log(check.length);
	for (let j = 0; j < check.length; j++) {
		console.log(typeof check[j]);
		window.localStorage.setItem("item" + j, check[j].innerHTML);

	}
}
let len = window.localStorage.getItem("index");

for (let j = 0; j < len; j++) {
	toDoListElement.innerHTML +="<li>"+window.localStorage.getItem("item" + j)+ "</li>";
}*/
