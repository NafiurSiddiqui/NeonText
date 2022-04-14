import { globalVar } from "./globalVariables";
import { globalFont } from "./font family/setFonts";
import setDisplay from "./globalFuntions";

let {
	widthContainer,
	barWidth,
	barWidthSize,
	heightContainer,
	barHeight,
	barHeightSize,
	uiInputText,
	display,
	canva,
	ctx,
} = globalVar;

let navText = uiInputText.firstElementChild;

//state variables
let textInputState = false;

//set the default states

let userText = "";
//---fontFamily = selected from the list of fontFamily
//---color = selected from the list of color

function init() {
	//initial default state
	userText = "Your Text";
	display.textContent = userText;
	setDisplay(widthContainer, null);
	setDisplay(heightContainer, null);

	ctx.font = "4rem arial";
	ctx.fillStyle = "White";
}

init();

let textWrapper = document.querySelector(".ui-display-userText-wrapper");

navText.addEventListener("input", (e) => {
	e.preventDefault();

	//get the input value, store it, return it
	userText = e.target.value;

	//persist data in local storage

	//show each letter upon typing
	display.textContent = userText.trim();

	//check if the state is true
	if (userText.length > 0) {
		textInputState = true;
	}

	//any space should be omitted from calculating
	if (e.data === " ") {
		return;
	}

	let textLength = userText.length;
	//width
	let displayWidth = getComputedStyle(display).width;
	let displayString = displayWidth.slice(0, -2);
	let displaySize = Math.ceil(+displayString);
	console.log(getComputedStyle(textWrapper));
	ctx.fillText(userText, 0, 50);
	let metrics = ctx.measureText(userText);
	// let width = metrics.width;
	let width = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
	// console.log(`Width: ${width}`);
	// console.log(displayWidth);

	// let textTop = Math.abs(metrics.actualBoundingBoxAscent).toFixed(2);
	// let textBottom = Math.abs(metrics.actualBoundingBoxDescent);

	//height
	let height = (
		Math.abs(metrics.actualBoundingBoxAscent) +
		Math.abs(metrics.actualBoundingBoxDescent)
	).toFixed(2);

	// console.log(`Width: ${displaySize}`);

	if (textLength >= 6) {
		textLength = textLength * 14;
	} else {
		textLength = textLength * 9;
	}

	if (textLength === 0) {
		ctx.clearRect(0, 0, canva.width, canva.height);
	}
	//measurement bars
	// barWidth.style.width = `${width}px`;
	barWidth.style.width = `${displaySize}px`;
	barWidthSize.textContent = `${textLength} CM`;
	barHeight.style.height = `${height}px`;
	barHeightSize.textContent = `${Math.round(height)}Cm`;

	if (userText.length > 0) {
		setDisplay(widthContainer, true);
	} else {
		setDisplay(widthContainer, null);
	}

	//setTimout for session storage and remove items from local storage, if there is data
});

function setBarMeasurement() {
	console.log("💥 time 💥");

	setDisplay(widthContainer, true);
	setDisplay(heightContainer, true);
}

navText.addEventListener("keyup", () => {
	//wait for 3 seconds and show the measurement
	clearTimeout(setBarMeasurement);
	setDisplay(widthContainer, null);
	setDisplay(heightContainer, null);
	console.log("CLEARED TIMEOUT");
});

navText.addEventListener("keydown", () => {
	setTimeout(setBarMeasurement, 3000);
});
