import { globalVar } from "./globalVariables";
import { globarPrice } from "./globalVariables";
import setDisplay, {
	writeOnCanvas,
	clearCanvas,
	measureBars,
	showBars,
	writeOnCanvasWithFont,
	calculateDimension,
	calculatePricing,
	calculation,
	fontBarCondition,
} from "./globalFuntions";
//globa var destructured
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

function init() {
	//initial default state
	//check for local storage value exist
	if (localStorage.length > 0) {
		userText = localStorage.getItem("userText");
		display.textContent = userText;
		let textLength = userText.length;
		writeOnCanvasWithFont(ctx, userText, "Tangerine");
		metrics = ctx.measureText(userText);
		calculation(
			display,
			metrics,
			textLength,
			barWidth,
			barWidthSize,
			barHeight,
			barHeightSize
		);
	} else {
		localStorage.clear();
		userText = "Your Text";
		display.textContent = userText;
		setDisplay(widthContainer, null);
		setDisplay(heightContainer, null);
	}
	ctx.font = "4rem Tangerine";
	ctx.fillStyle = "White";
}

init();

navText.addEventListener("input", (e) => {
	//get the input value, store it, return it
	userText = e.target.value;
	//persist data in local storage
	localStorage.setItem("userText", userText);
	//get the item from storage

	let localUserText = localStorage.getItem("userText");
	let timeout;
	textLength = localUserText.length;

	//show each letter upon typing
	display.textContent = localUserText.trim();

	//check if the state is true
	textLength > 0 ? (textInputState = true) : false;

	textLength >= 20
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

		let newUserText = localUserText;
		//rerender the userText
		if (newUserText.length !== 0) {
			clearCanvas(ctx, canva);
			writeOnCanvas(ctx, newUserText);
			metrics = ctx.measureText(userText);
			debounceMeasurement();
		}
	} else {
		writeOnCanvas(ctx, userText);
		metrics = ctx.measureText(userText);
		debounceMeasurement();
	}

	fontBarCondition(textLength);

	if (textLength === 0) {
		clearCanvas(ctx, canva);
		showBars(false);
	}

	return userText;
});

export default function debounceMeasurement() {
	let timeout;
	showBars(false);
	//cleartimeout
	clearTimeout(timeout);
	//measure bar
	timeout = setTimeout(
		calculation(
			display,
			metrics,
			textLength,
			barWidth,
			barWidthSize,
			barHeight,
			barHeightSize
		),
		3000
	);
}
