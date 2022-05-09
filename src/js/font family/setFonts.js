import globalFonts from "../globalVariables";
import { globalVar } from "../globalVariables";
import { globarPrice } from "../globalVariables";

import setDisplay, {
	writeOnCanvas,
	measureBars,
	showBars,
	writeOnCanvasWithFont,
} from "../globalFuntions";
import { clearCanvas } from "../globalFuntions";
import { userText } from "../textInput";
//destructured vars
let { fontBtn, fontBtnsWhite } = globalFonts;

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

//write the loadFont function

function loadFont(targetFont) {
	//---one for the display
	display.style.fontFamily = targetFont;
	//---one for the canvas
	ctx.font = `4rem ${targetFont}`;
	ctx.fillStyle = "White";
}

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
		console.log(target);
		//Clear displays
		setDisplay(widthContainer, false);
		setDisplay(heightContainer, false);
		clearCanvas(ctx, canva);
		//if it is is  the parent
		if (target.className === "ui-input-fontFamily-list") {
			let childId = target.firstElementChild.id;
			clearCanvas(ctx, canva);
			loadFont(childId);
			writeOnCanvasWithFont(ctx, userText, childId);
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
			loadFont(target.id);
			console.log(target.id);
			writeOnCanvasWithFont(ctx, userText, target.id);
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
			//set pricing cards

			priceSmall.textContent = `$${textLength * 2 + 120}`;
			priceMedium.textContent = `$${textLength * 3 + 120}`;
			priceLarge.textContent = `$${textLength * 4 + 120}`;

			// priceSmallLength.textContent = `${barWidthSize}`;
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
