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

// function conditionalSet(targetText, val, ...args) {
// 	//refer to the individual function arguments in case of confusion

// 	if (targetText === val) {
// 		if (checkClass(args[0], args[1], args[2])) {
// 			removeClass(args[0], args[1], args[2]);
// 		}
// 		if (checkClass(args[3], args[4], args[5])) {
// 			removeClass(args[3], args[4], args[5]);
// 		}
// 		toggleDisplay(args[6]);
// 		toggleDisplay(args[7]);
// 		setClass(args[8], args[9], args[10], args[11]);
// 		setClass(args[12], args[13], args[14], args[15]);
// 	}
// }

//for quick referencing

const navActive = "nav-active";
const uiActive = "ui-active";
//state checking
let textState = false;
let fontState = false;
let colorState = false;

// console.log(uiNav[0]);

// checkClass(false, uiNav, 0, navActive);

checkClass(true, uiInputText, null, uiActive);

function setValue(e) {
	// console.log(e.target.innerText);

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
