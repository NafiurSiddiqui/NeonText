import { globalVar } from "./globalVariables";
import setDisplay from "./globalFuntions";
//need NavText, UiText, display

let navText = globalVar.uiInputText.firstElementChild;
let textDisplay = globalVar.display;
let { bottomBarContainer, barLeft, barRight, barSize } = globalVar;

barLeft.style.width = "9px";
//state variables
let textInputState = false;

//set the default states

let userText = "Your text";
//---fontFamily = selected from the list of fontFamily
//---color = selected from the list of color

function init() {
	//initial default state
	textDisplay.textContent = userText;
	setDisplay(bottomBarContainer, null);
}

init();

navText.addEventListener("input", (e) => {
	// console.log(e.target.value);

	//get the input value, store it, return it
	userText = e.target.value;

	//persist data in local storage

	//show each letter upon typing
	textDisplay.textContent = userText;

	//check if the state is true
	if (userText.length > 0) {
		textInputState = true;
	}

	//calculate each length
	// console.log(userText.length * 9);

	//*if..input is true, clearTimeout and re-run the measurement() on 3seconds.

	//* or re-evaluate this function on every keystroke or input

	//setTimout for session storage and remove items from local storage, if there is data
	//set navTextState to true
});

console.log(barLeft.style.width);

function setBarMeasurement() {
	console.log("💥 time 💥");

	//calculate each length
	let textLength = userText.length * 9;
	console.log(textLength);
	//add the caluculation to each side of the bar

	// barSize = textLength;

	//wait for 3 seconds and show the measurement bar
	setDisplay(bottomBarContainer, true);
}

navText.addEventListener("keyup", () => {
	// console.log("measurment calculation ran!");

	// console.log(`From the keyup: ${userText}`);
	// barLeft.style.width = `${20 + userText}px`;
	//wait for 3 seconds and show the measurement
	setTimeout(setBarMeasurement, 3000);
});

navText.addEventListener("keydown", () => {
	console.log("KEY DOWN!");

	clearTimeout(setBarMeasurement);
	console.log("CLEARED TIMEOUT");
});
