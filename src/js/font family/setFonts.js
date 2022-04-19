import globalFonts from "../globalVariables";
import { globalVar } from "../globalVariables";
import setDisplay, {
	writeOnCanvas,
	measureBars,
	showBars,
} from "../globalFuntions";
import { clearCanvas } from "../globalFuntions";
import { userText, metrics } from "../textInput";
//destructured vars
let { fontBtn, fontBtnsWhite } = globalFonts;

let {
	widthContainer,
	barWidth,
	barWidthSize,
	heightContainer,
	barHeight,
	barHeightSize,
	display,
	canva,
	ctx,
} = globalVar;

//defaults
fontBtnsWhite.forEach((btn) => {
	btn.classList.add("hide");
});

const mouseIn = (event) => {
	let firstChild = event.target.firstElementChild.classList;
	let lastChild = event.target.lastElementChild.classList;
	firstChild.add("hide");
	lastChild.remove("hide");

	// console.log("works");
};

const mouseOut = (event) => {
	let firstChild = event.target.firstElementChild.classList;
	let lastChild = event.target.lastElementChild.classList;

	firstChild.remove("hide");
	lastChild.add("hide");
};

//write the loadFont function

function loadFont(targetFont) {
	//---one for the display
	display.style.fontFamily = targetFont;
	//---one for the canvas
	ctx.font = `4rem ${targetFont} `;
	ctx.fillStyle = "White";
}

export let fontClicked = false;

let fontUserText = "";
//font hover and action
fontBtn.forEach((btns) => {
	//mouseIN
	btns.addEventListener("mouseenter", mouseIn);
	//mouseOUt
	btns.addEventListener("mouseleave", mouseOut);
	//select font
	btns.addEventListener("click", (e) => {
		fontClicked = true;
		let target = e.target;
		console.log(userText);
		fontUserText = userText;
		fontUserText = "";
		console.log(fontUserText);
		console.log(`FROM FONT: ${fontUserText}`);
		let textLength = userText.length;

		//Clear displays
		setDisplay(widthContainer, false);
		setDisplay(heightContainer, false);
		clearCanvas(ctx, canva);
		//if it is is  the parent
		if (target.className === "ui-input-fontFamily-list") {
			let lastChildId = target.lastElementChild.id;
			console.log(`From Parent : ${lastChildId}`);

			// measureBars(
			// 	display,
			// 	metrics,
			// 	barWidth,
			// 	barWidthSize,
			// 	barHeight,
			// 	barHeightSize,
			// 	textLength
			// );
			loadFont(lastChildId);
			writeOnCanvas(ctx, userText);
			// showBars(true);
		} else {
			//if it is the child
			console.log(`From Child: ${target.id}`);

			loadFont(target.id);
			writeOnCanvas(ctx, userText);
		}
		//recalculate the fonts
		//-----fill the canvas with the text value
		measureBars(
			display,
			metrics,
			barWidth,
			barWidthSize,
			barHeight,
			barHeightSize,
			textLength
		);
		//setthe display for bars
		showBars(true);
		console.log(fontClicked);
		return fontClicked;
	});
});
