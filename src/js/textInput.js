import { globalVar } from "./globalVariables";

//need NavText, UiText, display

let navText = globalVar.uiInputText.firstElementChild;
let textDisplay = globalVar.display;

//state variables
let textInputState = false;

//set the default states

//---text = Your text
let userText = "Your text";
//---fontFamily = selected from the list of fontFamily
//---color = selected from the list of color

function init() {
	//initial default state
	textDisplay.textContent = userText;
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
	console.log(userText.length * 9);

	setTimeout(() => {
		// console.log("time");
		//wait for 3 seconds and show the measurement bar
	}, 3000);
	//------measure each letter by 9 cm each

	//setTimout for session storage and remove items from local storage, if there is data
	//set navTextState to true
});
