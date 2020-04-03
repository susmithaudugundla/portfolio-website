const depositEl = document.getElementById("deposit");
const withdrawEl = document.getElementById("withdraw");
const showBalanceEl = document.getElementById("showBalance");
const historyEl = document.getElementById("history");
const depositDivisionEl = document.getElementById("depositDivision");
const withdrawDivisionEl = document.getElementById("withdrawDivision");
const showBalanceDivisionEl = document.getElementById("showBalanceDivision");
const historyDivisionEl = document.getElementById("historyDivision");
const depositValueEl = document.getElementById("depositValue");
const withdrawValueEl = document.getElementById("withdrawValue");
const depositBtnEl = document.getElementById("depositBtn");
const withdrawBtnEl = document.getElementById("withdrawBtn");
const amountEl = document.getElementById("amount");
const depositValueErrorEl = document.getElementById("depositValueError");
const withdrawValueErrorEl = document.getElementById("withdrawValueError");
const depositTimerEl = document.getElementById("depositTimer");
const withdrawTimerEl = document.getElementById("withdrawTimer");
let arrayOfObjects = [];
let tableData = "";
const activeBtnBackground = "blue";
const defaultBtnBackground = "#f2f2f2"
const displayFlexEl = "flex";
const displayNoneEl = "none";
let timer;
const amountPattern = "^[0-9]+$"
let tableHeading = "<tr><td>Transaction Mode</td><td>Amount</td><td>Balance</td></tr>";
class Balance {
	constructor() {
		this.balance = 0;
	}
}
class ATM extends Balance {
	constructor() {
		super();
		this.mode = "Idle";
		this.transactionHistory = "";
	}
	makeWithdrawal(amount) {
		this.balance = this.balance - amount;
		transactionObj.balance = this.balance;
		updateTransactionHistory();
	}
	makeDeposit(amount) {
		this.balance = this.balance + amount;
		transactionObj.balance = this.balance;
		updateTransactionHistory();
	}
	showBalance() {
		return this.balance;
	}
}
class Transaction extends Balance {
	constructor() {
		super();
		this.transactionType = "";
		this.transactionAmount = 0;

	}
}
let atmObj = new ATM();
let transactionObj = new Transaction();
if (window.localStorage.getItem("arrayOfObjects") !== null) {
	let atmObject = JSON.parse(window.localStorage.getItem("atmObject"));
	atmObj.balance = atmObject.balance;
	atmObj.mode = atmObject.mode;
	atmObj.transactionHistory = atmObject.transactionHistory;
	arrayOfObjects = JSON.parse(window.localStorage.getItem("arrayOfObjects"));
	console.log(atmObj);
	console.log(arrayOfObjects);
}
switch (atmObj.mode) {
	case "Idle":
		btnBackground();
		divisionDisplay();
		break;
	case "Deposit":
		
}
depositBtnEl.onclick = () => {
	clearInterval(timer)
	let depositAamount = depositValueEl.value;
	if (depositAamount.match(amountPattern)) {
		depositAamount = parseInt(depositAamount);
		depositValueEl.value = "";
		atmObj.mode = "Idle";
		btnBackground();
		divisionDisplay();
		transactionObj.transactionType = "Deposit";
		transactionObj.transactionAmount = depositAamount;
		atmObj.makeDeposit(depositAamount);
		depositValueErrorEl.innerHTML = "";
		clearInterval(timer)
	}
	else {
		depositValueErrorEl.innerHTML = "*Invalid Value";
	}


};
withdrawBtnEl.onclick = () => {
	clearInterval(timer)
	let withdrawAmount = parseInt(withdrawValueEl.value, 10);
	if (withdrawAmount <= atmObj.balance) {
		withdrawValueEl.value = "";
		atmObj.mode = "Idle";
		btnBackground();
		divisionDisplay();
		transactionObj.transactionType = "Withdraw";
		transactionObj.transactionAmount = withdrawAmount;
		atmObj.makeWithdrawal(withdrawAmount);
		withdrawValueErrorEl.innerHTML = "";
		clearInterval(timer)
	}
	else {
		withdrawValueErrorEl.innerHTML = "*Insufficient Balance";
	}
};
depositEl.onclick = () => {
	clearInterval(timer);
	let i = 10;
	btnBackground();
	depositEl.style.background = activeBtnBackground;
	divisionDisplay();
	depositDivisionEl.style.display = displayFlexEl;
	atmObj.mode = "Deposit";

	timer = setInterval(() => {
		depositTimerEl.innerHTML = `Time left: ${i}`;
		i--;
		if (i < 0) {
			clearInterval(timer);
			atmObj.mode = "Idle";
			btnBackground();
			divisionDisplay();
		}
	}, 1000);


};
withdrawEl.onclick = () => {
	clearInterval(timer)
	let i = 10;
	btnBackground();
	withdrawEl.style.background = activeBtnBackground;
	divisionDisplay();
	atmObj.mode = "withdraw";
	withdrawDivisionEl.style.display = displayFlexEl;

	timer = setInterval(() => {
		withdrawTimerEl.innerHTML = `Time left: ${i}`;
		i--;
		if (i < 0) {
			clearInterval(timer);
			atmObj.mode = "Idle";
			btnBackground();
			divisionDisplay();
		}
	}, 1000);
};
showBalanceEl.onclick = () => {
	clearInterval(timer);
	btnBackground();
	atmObj.mode = "Show balance";
	showBalanceEl.style.background = activeBtnBackground;
	divisionDisplay();
	showBalanceDivisionEl.style.display = displayFlexEl;
	let balanceAmount = atmObj.showBalance();
	amountEl.innerHTML = balanceAmount;
};
historyEl.onclick = () => {
	clearInterval(timer);
	btnBackground();
	historyEl.style.background = activeBtnBackground;
	divisionDisplay();
	atmObj.mode = "History";
	historyDivisionEl.style.display = displayFlexEl;
	if (arrayOfObjects.length !== 0) {
		createTransactionHistory();
	}

};

function divisionDisplay() {
	depositDivisionEl.style.display = displayNoneEl;
	withdrawDivisionEl.style.display = displayNoneEl;
	showBalanceDivisionEl.style.display = displayNoneEl;
	historyDivisionEl.style.display = displayNoneEl;
}

function btnBackground() {
	depositEl.style.background = defaultBtnBackground;
	withdrawEl.style.background = defaultBtnBackground;
	showBalanceEl.style.background = defaultBtnBackground;
	historyEl.style.background = defaultBtnBackground;
}

function updateTransactionHistory() {
	let newObject = {
		transactionType: transactionObj.transactionType,
		transactionAmount: transactionObj.transactionAmount,
		balance: transactionObj.balance
	};
	arrayOfObjects.push(newObject);
	window.localStorage.setItem("arrayOfObjects", JSON.stringify(arrayOfObjects));
	window.localStorage.setItem("atmObject", JSON.stringify(atmObj));
}

function createTransactionHistory() {
	tableData = "";
	for (let i = 0; i < arrayOfObjects.length; i++) {
		tableData += `<tr><td>${arrayOfObjects[i].transactionType}</td><td>${arrayOfObjects[i].transactionAmount}</td><td>${arrayOfObjects[i].balance}</td></tr>`;
	}
	tableData = tableHeading + tableData;
	window.localStorage.setItem("tableData", tableData);
	historyDivisionEl.innerHTML = `<table>${tableData}</table>`;
}
//window.localStorage.clear();
