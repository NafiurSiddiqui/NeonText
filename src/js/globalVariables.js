const uiNav = document.querySelectorAll(".ui-input-nav-list");
const uiInputText = document.querySelector(".ui-input-form.text");
const uiInputFont = document.querySelector(".ui-input-form.fontFamily");
const uiInputColor = document.querySelector(".ui-input-form.color");
const uiForm = document.querySelectorAll(".ui-input-form");
const display = document.querySelector(".ui-display-userText-text");
const displayWrapper = document.querySelector(".ui-display-userText-wrapper");
const canva = document.getElementById("displayText");
const ctx = canva.getContext("2d");
//measurement bars
let barSize = document.querySelector(".measurementBar-width-length");
const bottomBarContainer = document.querySelector(
	".measurementBar-container-bottom"
);
let barBottom = document.querySelector(".measurementBar-width");
const barHeight = document.querySelector(".measurementBar-height");
const barHeightSize = document.querySelector(".measurementBar-height-length");

//font family

let fontBtn = document.querySelectorAll(".ui-input-fontFamily-list");
let fontBtnsBlack = document.querySelectorAll(
	".ui-input-fontFamily-list__image"
);
let fontBtnsWhite = document.querySelectorAll(
	".ui-input-fontFamily-list__imageWhite"
);

function fontBtnHover() {
	//on hover hide black and remove hide from white from the target class only
	//add hide to the black
	//remove hide from the white
}

//exporting these as globalVariable
export const globalVar = {
	uiNav,
	uiInputText,
	uiInputFont,
	uiInputColor,
	uiForm,
	display,
	displayWrapper,
	canva,
	ctx,
	barSize,
	bottomBarContainer,
	barBottom,
	barHeight,
	barHeightSize,
};

console.log(globalVar.canva);

let globalFonts = {
	fontBtn,
	fontBtnsWhite,
	fontBtnsBlack,
};

export default globalFonts;
