const uiNav = document.querySelectorAll(".ui-input-nav-list");
const uiInputText = document.querySelector(".ui-input-form.text");
const uiInputFont = document.querySelector(".ui-input-form.fontFamily");
const uiInputColor = document.querySelector(".ui-input-form.color");
const uiForm = document.querySelectorAll(".ui-input-form");
const display = document.querySelector(".ui-display-userText-text");
let barLeft = document.querySelector(".measurementBar-left");
let barRight = document.querySelector(".measurementBar-right");
let barSize = document.querySelector(".measurementBar-width-length");
const bottomBarContainer = document.querySelector(
	".measurementBar-container-bottom"
);

let barBottom = document.querySelector(".measurementBar-width");

console.log(barBottom);
//----------- Measurment Bar

//exporting these as globalVariable
export const globalVar = {
	uiNav,
	uiInputText,
	uiInputFont,
	uiInputColor,
	uiForm,
	display,
	barLeft,
	barRight,
	barSize,
	bottomBarContainer,
	barBottom,
};
