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

// console.log(fontBtn);
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
		// console.log(userText);
		fontUserText = userText;
		fontUserText = "";
		// console.log(fontUserText);
		// console.log(`FROM FONT: ${fontUserText}`);
		let textLength = userText.length;

		//Clear displays
		setDisplay(widthContainer, false);
		setDisplay(heightContainer, false);
		clearCanvas(ctx, canva);
		//if it is is  the parent
		if (target.className === "ui-input-fontFamily-list") {
			let lastChildId = target.lastElementChild.id;
			writeOnCanvas(ctx, userText);
			loadFont(lastChildId);
			let metrics = ctx.measureText(userText);
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
			//if it is the child
			writeOnCanvas(ctx, userText);
			loadFont(target.id);
			let metrics = ctx.measureText(userText);
			measureBars(
				display,
				metrics,
				barWidth,
				barWidthSize,
				barHeight,
				barHeightSize,
				textLength
			);
		}

		let targetBtn = e.target.closest(".ui-input-fontFamily-list");
		//loop throught all the lists
		fontBtn.forEach((cls) => {
			//if btnactive match found-remove it
			cls.classList.remove("btn-active");
		});

		//add btn-active class to the existing target list
		targetBtn.classList.add("btn-active");
		//setthe display for bars
		showBars(true);

		return fontClicked;
	});
});
