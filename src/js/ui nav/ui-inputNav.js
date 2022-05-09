// import "./globalVariables";
import { globalVar } from "../globalVariables";
("./globalVariables");

//global Var destructured
let { uiNav, uiInputText, uiInputFont, uiInputColor, uiForm, display } =
	globalVar;

function checkClass(single = false, el, child, className) {
	if (single === true) {
		return el.classList.contains(className);
	} else {
		return el[child].classList.contains(className);
	}
}

function setClass(single = false, el, child, className) {
	if (single === true) {
		//returns element only
		return el.classList.add(className);
	} else {
		//returns element from an array like globalVar.uiNav
		return el[child].classList.add(className);
	}
}

function removeClass(single = false, el, child, className) {
	if (single === true) {
		el.classList.remove(className);
	} else {
		el[child].classList.remove(className);
	}
}

//for quick referencing

const navActive = "nav-active";
const uiActive = "ui-active";
//state checking
let textState = false;
let fontState = false;
let colorState = false;

checkClass(true, uiInputText, null, uiActive);

function setValue(e) {
	let targetText = e.target.innerText;

	//TEXT NAV
	if (targetText === "Text") {
		//check and remove any nav Activation
		if (
			checkClass(false, uiNav, 1, navActive) ||
			checkClass(false, uiNav, 2, navActive)
		) {
			removeClass(false, uiNav, 1, navActive);
			removeClass(false, uiNav, 2, navActive);
			fontState = false;
			colorState = false;
		}
		//check and remove any uiActivation
		if (
			checkClass(true, uiInputFont, null, uiActive) ||
			checkClass(true, uiInputColor, null, uiActive)
		) {
			removeClass(true, uiInputFont, null, uiActive);
			removeClass(true, uiInputColor, null, uiActive);
		}

		//activate text Nav
		setClass(false, uiNav, 0, navActive);
		//activate text input area
		setClass(true, uiInputText, null, uiActive);
		//set the state to true
		return (textState = true);
	}

	//font famly

	if (targetText === "Font Family") {
		//check and remove any nav Activation
		if (
			checkClass(false, uiNav, 0, navActive) ||
			checkClass(false, uiNav, 2, navActive)
		) {
			removeClass(false, uiNav, 0, navActive);
			removeClass(false, uiNav, 2, navActive);
			textState = false;
			colorState = false;
		}
		//check and remove any uiActivation
		if (
			checkClass(true, uiInputText, null, uiActive) ||
			checkClass(true, uiInputColor, null, uiActive)
		) {
			removeClass(true, uiInputText, null, uiActive);
			removeClass(true, uiInputColor, null, uiActive);
		}

		//activate font Nav
		setClass(false, uiNav, 1, navActive);

		//activate font btn area
		setClass(true, uiInputFont, null, uiActive);
		//set the state to true
		fontState = true;
	}

	//color
	if (targetText === "Color") {
		//check and remove any nav Activation
		if (
			checkClass(false, uiNav, 0, navActive) ||
			checkClass(false, uiNav, 1, navActive)
		) {
			removeClass(false, uiNav, 0, navActive);
			removeClass(false, uiNav, 1, navActive);
			textState = false;
			fontState = false;
		}
		//check and remove any uiActivation
		if (
			checkClass(true, uiInputText, null, uiActive) ||
			checkClass(true, uiInputFont, null, uiActive)
		) {
			removeClass(true, uiInputText, null, uiActive);
			removeClass(true, uiInputFont, null, uiActive);
		}

		//activate color Nav
		setClass(false, uiNav, 2, navActive);
		//activate color bulb area
		setClass(true, uiInputColor, null, uiActive);
		//set the state to true
		return (colorState = true);
	}
}

// console.log(textState);

globalVar.uiNav.forEach((list) => {
	list.addEventListener("click", setValue);
});

/**
 * @ERRORs -
 * In case of any TypeError:el.classlist is undefined, try turning the booleans true or false. Understanding these helper function beforehand will save your time!
 */
