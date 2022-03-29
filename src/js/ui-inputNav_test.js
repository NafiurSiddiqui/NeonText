// import "./globalVariables";
import { globalVar } from "./globalVariables";
("./globalVariables");
// console.log(globalVar.uiNav, globalVar.uiInputText, globalVar.uiInputFont, globalVar.uiInputColor);

function checkClass(el, child, className) {
	return (el[child] || el).classList.contains(className);
}

function setClass(el, child, className, single = false) {
	if (single === true) {
		//returns element only
		return el.classList.add(className);
	} else {
		//returns element from an array like globalVar.uiNav
		return el[child].classList.add(className);
	}
}

function removeClass(el, child, className) {
	(el[child] || el).classList.remove(className);
}

function toggleDisplay(el, on) {
	if (on) {
		el.style.display = "flex";
	} else {
		el.style.display = "none";
	}
}

function conditionalSet(targetText, val, ...args) {
	//refer to the individual function arguments in case of confusion

	if (targetText === val) {
		if (checkClass(args[0], args[1], args[2])) {
			removeClass(args[0], args[1], args[2]);
		}
		if (checkClass(args[3], args[4], args[5])) {
			removeClass(args[3], args[4], args[5]);
		}
		toggleDisplay(args[6]);
		toggleDisplay(args[7]);
		setClass(args[8], args[9], args[10], args[11]);
		setClass(args[12], args[13], args[14], args[15]);
	}
}

//for quick referencing
const navActive = "nav-active";
const uiActive = "ui-active";
//state checking
let textNavState;
let textUiState;
let fontNavState;
let fontUiState;
let colorNavState;
let colorUiState;

function setValue(e) {
	// console.log(e.target.innerText);

	let targetText = e.target.innerText;

	//TEXT NAV
	if (targetText === "Text") {
		//check and remove any nav Activation
		if (
			globalVar.uiNav[1].classList.contains(navActive) ||
			globalVar.uiNav[2].classList.contains(navActive)
		) {
			globalVar.uiNav[1].classList.remove(navActive);
			globalVar.uiNav[2].classList.remove(navActive);
			fontNavState = false;
			colorNavState = false;
		}
		//check and remove any uiActivation
		if (
			globalVar.uiInputFont.classList.contains(uiActive) ||
			globalVar.uiInputColor.classList.contains(uiActive)
		) {
			globalVar.uiInputFont.classList.remove(uiActive);
			globalVar.uiInputColor.classList.remove(uiActive);
			fontUiState = false;
			colorUiState = false;
		}

		//activate text Nav
		globalVar.uiNav[0].classList.add(navActive);
		textNavState = true;
		//activate text input area
		// globalVar.uiInputText.style.display = "flex";
		globalVar.uiInputText.classList.add(uiActive);
		//set the state to true
		textUiState = true;
	}

	//font famly

	if (targetText === "Font Family") {
		//check and remove any nav Activation
		if (
			globalVar.uiNav[0].classList.contains(navActive) ||
			globalVar.uiNav[2].classList.contains(navActive)
		) {
			globalVar.uiNav[0].classList.remove(navActive);
			globalVar.uiNav[2].classList.remove(navActive);
			textNavState = false;
			colorNavState = false;
		}
		//check and remove any uiActivation
		if (
			globalVar.uiInputText.classList.contains(uiActive) ||
			globalVar.uiInputColor.classList.contains(uiActive)
		) {
			globalVar.uiInputText.classList.remove(uiActive);
			globalVar.uiInputColor.classList.remove(uiActive);
			textUiState = false;
			colorUiState = false;
		}

		//activate text Nav
		globalVar.uiNav[1].classList.add(navActive);
		fontNavState = true;
		//activate text input area
		// globalVar.uiInputFont.style.display = "flex";
		globalVar.uiInputFont.classList.add(uiActive);
		//set the state to true
		fontUiState = true;
	}

	//color
	if (targetText === "Color") {
		//check and remove any nav Activation
		if (
			globalVar.uiNav[0].classList.contains(navActive) ||
			globalVar.uiNav[1].classList.contains(navActive)
		) {
			globalVar.uiNav[0].classList.remove(navActive);
			globalVar.uiNav[1].classList.remove(navActive);
			textNavState = false;
			fontNavState = false;
		}
		//check and remove any uiActivation
		if (
			globalVar.uiInputText.classList.contains(uiActive) ||
			globalVar.uiInputFont.classList.contains(uiActive)
		) {
			globalVar.uiInputText.classList.remove(uiActive);
			globalVar.uiInputFont.classList.remove(uiActive);
			textUiState = false;
			fontUiState = false;
		}

		//activate text Nav
		globalVar.uiNav[2].classList.add(navActive);
		colorNavState = true;
		//activate text input area
		// globalVar.uiInputFont.style.display = "flex";
		globalVar.uiInputColor.classList.add(uiActive);
		//set the state to true
		colorUiState = true;
	}
}

// console.log(checkClass(1));

globalVar.uiNav.forEach((list) => {
	list.addEventListener("click", setValue);
});
