import { globalVar } from "./globalVariables";
import setDisplay from "./globalFuntions";

let navText = globalVar.uiInputText.firstElementChild;
let textDisplay = globalVar.display;
let { barRight, barSize, barBottom } = globalVar;

//state variables
let textInputState = false;

//set the default states

let userText = "";
//---fontFamily = selected from the list of fontFamily
//---color = selected from the list of color

function init() {
	//initial default state
	userText = "Your Text";
	textDisplay.textContent = userText;
	// setDisplay(bottomBarContainer, null);
	// setDisplay(barBottom, null);
}

init();

navText.addEventListener("input", (e) => {
	e.preventDefault();

	//get the input value, store it, return it
	userText = e.target.value;

	//persist data in local storage

	//show each letter upon typing
	textDisplay.textContent = userText.trim();

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
	let displayWidth = getComputedStyle(textDisplay).width;
	let displayString = displayWidth.slice(0, -2);
	let displaySize = Math.ceil(+displayString);
	//height

	let canvaUserText = ctx.fillText(userText, 100, 50);
	let metrics = ctx.measureText(userText);

	let textTop = Math.abs(metrics.actualBoundingBoxAscent).toFixed(2);
	let textBottom = Math.abs(metrics.actualBoundingBoxDescent);
	let height = (
		Math.abs(metrics.actualBoundingBoxAscent) +
		Math.abs(metrics.actualBoundingBoxDescent)
	).toFixed(2);

	console.log(
		` TOP: ${textTop} \n Bottom: ${textBottom} \n totalHeight: ${height}`
	);

	if (textLength >= 6) {
		textLength = textLength * 14;
	} else {
		textLength = textLength * 9;
	}

	if (textLength === 0) {
		ctx.clearRect(0, 0, canva.width, canva.height);
	}

	barBottom.style.width = `${displaySize}px`;
	barSize.textContent = `${textLength} CM`;

	if (userText.length > 0) {
		setDisplay(barBottom, true);
	} else {
		setDisplay(barBottom, null);
	}

	//setTimout for session storage and remove items from local storage, if there is data
});

const canva = document.getElementById("displayText");
const ctx = canva.getContext("2d");
ctx.font = "50px serif";
ctx.fillStyle = "White";

// function setBarMeasurement() {
// 	console.log("💥 time 💥");

// 	// barSize = textLength;

// 	//wait for 3 seconds and show the measurement bar
// 	setDisplay(bottomBarContainer, true);
// }

// navText.addEventListener("keyup", () => {
// 	// console.log("measurment calculation ran!");

// 	// console.log(`From the keyup: ${userText}`);
// 	barLeft.style.width = `${userText}px`;
// 	console.log(userText);
// 	//wait for 3 seconds and show the measurement
// 	clearTimeout(setBarMeasurement);
// 	setDisplay(bottomBarContainer, null);
// 	console.log("CLEARED TIMEOUT");
// });

// navText.addEventListener("keydown", () => {
// 	// console.log("KEY DOWN!");
// 	//calculate each length
// 	let textLength = userText.length * 9;
// 	console.log(textLength);
// 	//add the caluculation to each side of the bar

// 	setTimeout(setBarMeasurement, 3000);
// });
