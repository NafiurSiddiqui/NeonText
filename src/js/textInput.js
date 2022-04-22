import { globalVar } from "./globalVariables";
// import { globalFont } from "./font family/setFonts";
import setDisplay, {
	writeOnCanvas,
	clearCanvas,
	measureBars,
	showBars,
	writeOnCanvasWithFont,
} from "./globalFuntions";
// import { fontClicked } from "./font family/setFonts";

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

export let userText = "";
export let textLength = null;
export let metrics = null;
//---fontFamily = selected from the list of fontFamily
//---color = selected from the list of color

function init() {
	//initial default state
	//check for local storage value exist
	if (localStorage.length > 0) {
		userText = localStorage.getItem("userText");
		display.textContent = userText;
		// writeOnCanvas(ctx, userText);
		writeOnCanvasWithFont(ctx, userText, "arial");
	} else {
		userText = "Your Text";
		display.textContent = userText;
		setDisplay(widthContainer, null);
		setDisplay(heightContainer, null);
	}
	ctx.font = "4rem arial";
	ctx.fillStyle = "White";
}

init();

// let textWrapper = document.querySelector(".ui-display-userText-wrapper");

navText.addEventListener("input", (e) => {
	e.preventDefault();

	//get the input value, store it, return it
	userText = e.target.value;

	//persist data in local storage
	localStorage.setItem("userText", userText);
	//show each letter upon typing
	display.textContent = userText.trim();
	let textLength = userText.length;

	//check if the state is true
	textLength > 0 ? (textInputState = true) : false;

	textLength >= 30
		? alert(
				`If you need more than 30 characters of text, Please contact us: 📞 +14-999-876-42`
		  )
		: "";
	//any space should be omitted from calculating
	if (e.data === " ") {
		return;
	}
	if (e.inputType === "deleteContentBackward") {
		//recapture the userText here
		let newUserText = userText;
		console.log(newUserText);
		//rerender the userText
		if (newUserText.length !== 0) {
			clearCanvas(ctx, canva);
			writeOnCanvas(ctx, newUserText);
		}
	} else {
		writeOnCanvas(ctx, userText);
		return (metrics = ctx.measureText(userText));
	}

	measureBars(
		display,
		metrics,
		barWidth,
		barWidthSize,
		barHeight,
		barHeightSize,
		textLength
	);

	if (textLength === 0) {
		clearCanvas(ctx, canva);
	}

	if (userText.length > 0) {
		setDisplay(widthContainer, true);
	} else {
		setDisplay(widthContainer, null);
	}

	//setTimout for session storage and remove items from local storage, if there is data

	return [userText, metrics];
});

function setBarMeasurement() {
	console.log("💥 time 💥");
	showBars(true);
}

navText.addEventListener("keyup", () => {
	//wait for 3 seconds and show the measurement
	clearTimeout(setBarMeasurement);

	showBars(null);
	console.log("CLEARED TIMEOUT");
});

navText.addEventListener("keydown", () => {
	setTimeout(setBarMeasurement, 3000);
});
