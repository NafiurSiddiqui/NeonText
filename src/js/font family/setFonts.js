import globalFonts, { globalVar } from "../globalVariables";
import setDisplay, {
	showBars,
	measureBars,
	fontBarCondition,
	clearCanvas,
} from "../globalFuntions";
// import { clearCanvas } from "../globalFuntions";
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
	return width;
}

getScreenSize();

let screenWidth = getScreenSize();

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

		//Clear displays
		// setDisplay(widthContainer, false);
		setDisplay(heightContainer, false);
		clearCanvas(ctx, canva);

		//if it is is  the parent

		const targetCondition = target.classList.length > 1;

		//big fonts
		let largeFonts = "";
		console.log("--------✨✨");
		if (targetCondition) {
			let fontId = target.classList[1];
			largeFonts = fontId;
			console.log(`From Parent click`);
			clearCanvas(ctx, canva);
			loadFont(fontId, userText);
			let metrics = ctx.measureText(userText);
			measureBars(
				metrics,
				textLength,

				barWidthSize,
				barHeight,
				barHeightSize
			);
		} else {
			//if it is the child
			largeFonts = target.id;
			clearCanvas(ctx, canva);
			loadFont(target.id, userText);
			let metrics = ctx.measureText(userText);
			measureBars(metrics, textLength, barWidthSize, barHeight, barHeightSize);
		}
		//dynamic font sizing

		if (largeFonts === "Amsterdam" || largeFonts === "RasterSlice") {
			screenWidth >= 800 ? setFontSize(50) : setFontSize(35);
		} else {
			screenWidth >= 600 ? setFontSize(70) : setFontSize(45);
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

function setFontSize(size) {
	return (display.style.fontSize = `${size}px`);
}
