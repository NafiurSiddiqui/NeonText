const uiNav = document.querySelectorAll(".ui-input-nav-list");
const uiInputText = document.querySelector(".ui-input-form.text");
const uiInputFont = document.querySelector(".ui-input-form.fontFamily");
const uiInputColor = document.querySelector(".ui-input-form.color");
const uiForm = document.querySelectorAll(".ui-input-form");
const display = document.querySelector(".ui-display-userText-text");

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

console.log(fontBtn[0].lastChild);

let fontBtnsWhite = document.querySelectorAll(
	".ui-input-fontFamily-list__imageWhite"
);

fontBtnsWhite.forEach((btn) => {
	btn.classList.add("hide");
});

function fontBtnHover() {
	//on hover hide black and remove hide from white from the target class only
	//add hide to the black
	//remove hide from the white
}

fontBtnsBlack.forEach((btns) => {
	let mouseOver = false;
	btns.addEventListener("mouseover", (event) => {
		mouseOver = true;
		event.target.classList.add("hide");

		// console.log("works on black!");
	});

	btns.classList.remove("hide");

	// btns.addEventListener("mouseout", (event) => {
	// 	event.target.classList.remove("hide");
	// });
});

fontBtnsWhite.forEach((btns) => {
	btns.addEventListener("mouseover", (event) => {
		event.target.classList.remove("hide");
		// console.log("works on white!");
	});

	btns.addEventListener("mouseout", (event) => {
		event.target.classList.add("hide");
		// console.log("works on white!");
	});
});

//exporting these as globalVariable
export const globalVar = {
	uiNav,
	uiInputText,
	uiInputFont,
	uiInputColor,
	uiForm,
	display,
	barSize,
	bottomBarContainer,
	barBottom,
	barHeight,
	barHeightSize,
};
