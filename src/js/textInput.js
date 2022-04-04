import { globalVar } from "./globalVariables";
import setDisplay from "./globalFuntions";
//need NavText, UiText, display

let navText = globalVar.uiInputText.firstElementChild;
let textDisplay = globalVar.display;
let { bottomBarContainer, barLeft, barRight, barSize, barBottom } = globalVar;

//state variables
let textInputState = false;
// console.log(globalVar.barBottom);
//set the default states

let userText = "Your text";
//---fontFamily = selected from the list of fontFamily
//---color = selected from the list of color

function init() {
	//initial default state
	textDisplay.textContent = userText;
	// setDisplay(bottomBarContainer, null);
	setDisplay(barBottom, null);
}

init();

navText.addEventListener("input", (e) => {
	e.preventDefault();

	// console.log();
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
	let displayWidth = getComputedStyle(textDisplay).width;
	let displayString = displayWidth.slice(0, -2);
	let displaySize = Math.ceil(+displayString);

	console.log();
	console.log(textLength);

	if (textLength >= 6) {
		textLength = textLength * 14;
	} else {
		textLength = textLength * 9;
	}
	// let textLength = userText.length * 10;

	// ? HOW about you calculate the size of the textBox and grow shrink the bar accordingly?
	//calculate each length

	//!TEST
	// barLeft.style.width = `${displaySize}px`;
	// barRight.style.width = `${displaySize}px`;

	barBottom.style.width = `${displaySize}px`;
	barSize.textContent = `${textLength} CM`;

	//PROTOTYPE----------
	// barLeft.style.width = textLength + "px";
	// barRight.style.width = `${textLength}px`;
	// barSize.textContent = `${textLength} CM`;

	// if (userText.length > 0) {
	// 	setDisplay(bottomBarContainer, true);
	// } else {
	// 	setDisplay(bottomBarContainer, null);
	// }

	//!TEST
	if (userText.length > 0) {
		setDisplay(barBottom, true);
	} else {
		setDisplay(barBottom, null);
	}

	//*if..input is true, clearTimeout and re-run the measurement() on 3seconds.

	//* or re-evaluate this function on every keystroke or input

	//setTimout for session storage and remove items from local storage, if there is data
});

// console.log(barLeft.style.width);

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
