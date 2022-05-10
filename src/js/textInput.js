import { globalVar } from "./globalVariables";
import { globarPrice } from "./globalVariables";
import setDisplay, {
	writeOnCanvas,
	clearCanvas,
	measureBars,
	showBars,
	writeOnCanvasWithFont,
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
let {
	priceSmall,
	priceSmallLength,
	priceSmallHeight,
	priceMedium,
	priceMediumLength,
	priceMediumHeight,
	priceLarge,
	priceLargeHeight,
	priceLargeLength,
} = globarPrice;

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
		measureBars(
			display,
			metrics,
			barWidth,
			barWidthSize,
			barHeight,
			barHeightSize,
			textLength
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
	console.log(priceSmall);
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

		let newUserText = localUserText;

		//rerender the userText
		if (newUserText.length !== 0) {
			clearCanvas(ctx, canva);
			writeOnCanvas(ctx, newUserText);
			metrics = ctx.measureText(userText);
			debounceMeasurement();

			//render the pricings

			priceSmall.textContent = `$${newUserText.length * 80}`;
		}
	} else {
		writeOnCanvas(ctx, userText);
		metrics = ctx.measureText(userText);
		debounceMeasurement();
		//PRICINGS
		priceSmall.textContent = `$${userText.length * 80}`;
	}

	if (textLength === 0) {
		clearCanvas(ctx, canva);
	}

	return userText, metrics, textLength;
});

function debounceMeasurement() {
	let timeout;
	showBars(false);
	//cleartimeout
	clearTimeout(timeout);
	//measure bar
	timeout = setTimeout(() => {
		let cardMeasures = measureBars(
			display,
			metrics,
			barWidth,
			barWidthSize,
			barHeight,
			barHeightSize,
			textLength
		);
		showBars(true);
		let width = parseInt(cardMeasures[0]);
		let height = parseInt(cardMeasures[1]);
		console.log(width, height);
		console.log(userText);
		priceSmallLength.textContent = `${width} Cm`;
		priceSmallHeight.textContent = `${height} Cm`;
		priceMediumLength.textContent = `${width * 2} Cm`;
		priceMediumHeight.textContent = `${height * 1.1} Cm`;
		priceLargeLength.textContent = `${width * 3} Cm`;
		priceLargeHeight.textContent = `${height * 1.3} Cm`;
	}, 3000);
}
