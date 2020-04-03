let item = 0;
const remainingToDosElement = document.getElementById("remainingToDos");
remainingToDosElement.innerHTML = `${item} items left`;
const toDoItemElement = document.getElementById("toDoItem");
const toDoListElement = document.getElementById("toDoList");
const downArrowElement = document.getElementById("downArrow");
const buttonsRowElement = document.getElementById("buttonsRow");
const clearCompletedToDosElement = document.getElementById("clearCompletedToDos");
const allToDoItemsElement = document.getElementById("allToDoItems");
const activeToDoItemsElement = document.getElementById("activeToDoItems");
const completedToDoItemsElement = document.getElementById("completedToDoItems");
toDoItemElement.onkeydown = (event) => {
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
			allItems();
			toDoItemElement.value = "";
			item = item + 1;
			remainingToDosElement.innerHTML = `${item} items left`;
			let checkboxes = document.querySelectorAll("input[name]").length;
			if (checkboxes > 0) {
				downArrowElement.style.display = "inline-block";
				buttonsRowElement.style.display = "flex";
			}
			else {
				downArrowElement.style.display = "none";
				buttonsRowElement.style.display = "none";
			}
		}
	}
}

function checkedOrNot() {
	let check = document.getElementsByName("checkbox");
	check.forEach(listitem => {
		if (listitem.checked) {
			listitem.nextElementSibling.style.textDecoration = "line-through";
			listitem.nextElementSibling.style.color = "#d9d9d9";
		}
		else {
			listitem.nextElementSibling.style.textDecoration = "none";
			listitem.nextElementSibling.style.color = "#4d4d4d";
		}
	});
}

function displayOrNone() {
	let deleteItem = document.getElementsByClassName("display-or-none");
	for (let i = 0; i < deleteItem.length; i++) {
		deleteItem[i].onclick = (event) => {
			if (confirm("Are you sure to delte an item")) {
				deleteItem[i].parentElement.remove();
			}
		}
	}
}

function editable() {
	let editableItem = document.getElementsByName("edit");
	for (let i = 0; i < editableItem.length; i++) {
		if (!editableItem[i].previousSibling.checked) {
			editableItem[i].onclick = (event) => {
				editableItem[i].contentEditable = true;
				editableItem[i].style.borderColor = "#e1e1e1";

				editableItem[i].onblur = (event) => {
					editableItem[i].contentEditable = false;
				}
			}
		}
	}
}
toDoListElement.onclick = () => {

	let checkboxes = document.querySelectorAll("input[name]").length;
	let checkedCheckboxes = document.querySelectorAll("input:checked").length;
	if (checkboxes > 0) {
		buttonsRowElement.style.display = "flex";
		downArrowElement.style.display = "inline-block";
	}
	else {
		buttonsRowElement.style.display = "none";
		downArrowElement.style.display = "none";
	}
	if (item > 0) {
		clearCompletedToDosElement.style.visibility = "visible";
	}
	else {
		clearCompletedToDosElement.style.visibility = "hidden";
	}
	item = checkboxes - checkedCheckboxes;
	remainingToDosElement.innerHTML = `${item} items left`;
}

function allItems() {

	let activeItems = document.getElementsByName("checkbox");
	for (let i = 0; i < activeItems.length; i++) {
		activeItems[i].parentElement.style.display = "flex";
	}

}
allToDoItemsElement.onclick = (event) => {
	allItems();
}
activeToDoItemsElement.onclick = (event) => {
	let activeItems = document.getElementsByName("checkbox");
	for (let i = 0; i < activeItems.length; i++) {
		if (activeItems[i].checked) {
			activeItems[i].parentElement.style.display = "none";
		}
		else {
			activeItems[i].parentElement.style.display = "flex";
		}
	}
}
completedToDoItemsElement.onclick = (event) => {
	let activeItems = document.getElementsByName("checkbox");
	console.log(activeItems);
	for (let i = 0; i < activeItems.length; i++) {
		if (!activeItems[i].checked) {
			activeItems[i].parentElement.style.display = "none";
		}
		else {
			activeItems[i].parentElement.style.display = "flex";
		}
	}
}
clearCompletedToDosElement.onclick = (event) => {
	let completedItems = document.querySelectorAll("input:checked");
	for (let i = 0; i < completedItems.length; i++) {

		completedItems[i].parentElement.remove();

	}
}
