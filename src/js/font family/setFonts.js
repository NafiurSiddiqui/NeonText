import globalFonts from "../globalVariables";
import { globalVar } from "../globalVariables";
import { globarPrice } from "../globalVariables";
import setDisplay, {
	showBars,
	writeOnCanvasWithFont,
	calculation,
	writeOnCanvas,
	measureBars,
	fontBarCondition,
} from "../globalFuntions";
import { clearCanvas } from "../globalFuntions";
import { userText } from "../textInput";

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

function loadFont(targetFont, userText) {
	//---one for the display
	display.style.fontFamily = targetFont;
	//---one for the canvas
	ctx.font = `4rem ${targetFont}`;
	ctx.fillStyle = "White";
	// console.log(`Loaded font: ${targetFont}`);
	ctx.fillText(userText, 0, 50);
}

function getScreenSize() {
	let width = window.innerWidth;
	console.log(`Window width: ${width}`);
	return width;
}

getScreenSize();

let screenWidth = getScreenSize();

console.log(screenWidth);

export let fontClicked = false;

let fontUserText = "";
//font  action
fontBtn.forEach((btns) => {
	//select font
	btns.addEventListener("click", (e) => {
		fontClicked = true;
		let target = e.target;
		fontUserText = userText;
		fontUserText = "";
		let textLength = userText.length;
		// console.log(target);
		//Clear displays
		setDisplay(widthContainer, false);
		setDisplay(heightContainer, false);
		clearCanvas(ctx, canva);

		// console.log(target.classList);
		// console.log(target.classList.length > 1);
		//if it is is  the parent

		const targetCondition = target.classList.length > 1;

		//big fonts
		let largeFonts = "";

		if (targetCondition) {
			let fontId = target.classList[1];
			largeFonts = fontId;
			console.log(`Large Fonts: ${largeFonts}`);
			clearCanvas(ctx, canva);
			loadFont(fontId, userText);
			let metrics = ctx.measureText(userText);
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
			//if it is the child
			largeFonts = target.id;
			clearCanvas(ctx, canva);
			loadFont(target.id, userText);
			// console.log(`Large Fonts: ${largeFonts}`);
			let metrics = ctx.measureText(userText);
			calculation(
				display,
				metrics,
				textLength,
				barWidth,
				barWidthSize,
				barHeight,
				barHeightSize
			);
		}
		//dynamic font sizing
		console.log(`Large Fonts fromm outside: ${largeFonts}`);

		console.log(
			largeFonts !== "HerrVonMuellerhoff" || largeFonts !== "Tangerine"
		);
		if (largeFonts === "Amsterdam") {
			screenWidth >= 800
				? (display.style.fontSize = "2.5vw")
				: (display.style.fontSize = "4vw");
			console.log("FROM CONDITION 1");
		}

		let targetBtn = e.target.closest(".ui-input-fontFamily-list");
		//loop throught all the lists
		fontBtn.forEach((cls) => {
			//if btnactive match found-remove it
			cls.classList.remove("btn-active");
		});

		//add btn-active class to the existing target list
		targetBtn.classList.add("btn-active");

		fontBarCondition(textLength);
		//setthe display for bars
		showBars(true);

		return fontClicked;
	});
});
