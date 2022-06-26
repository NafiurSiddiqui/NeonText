import globalFonts, { globalVar } from '../globalVariables';
import setDisplay, {
	showBars,
	measureBars,
	clearCanvas,
} from '../globalFuntions';
import { userText } from '../textInput';

//destructured vars
let { fontBtn } = globalFonts;

let {
	barWidthSize,
	heightContainer,
	barHeight,
	barHeightSize,
	display,
	canva,
	ctx,
} = globalVar;

//defaults

function loadFont(targetFont, userText) {
	//---one for the display
	display.style.fontFamily = targetFont;
	//---one for the canvas
	ctx.font = `4rem ${targetFont}`;
	ctx.fillStyle = 'White';
	ctx.fillText(userText, 0, 50);
}

function getScreenSize() {
	let width = window.innerWidth;
	return width;
}

getScreenSize();

let screenWidth = getScreenSize();

export let fontClicked = false;
let fontUserText = '';

//font  action
fontBtn.forEach((btns) => {
	//select font
	btns.addEventListener('click', (e) => {
		fontClicked = true;
		let target = e.target;
		fontUserText = userText;
		fontUserText = '';
		let textLength = userText.length;
		let metrics;
		let newHeight;
		//Clear displays
		setDisplay(heightContainer, false);
		clearCanvas(ctx, canva);

		const targetCondition = target.classList.length > 1;
		//big fonts
		let largeFonts = '';

		//if it is is  the parent
		if (targetCondition) {
			let fontId = target.classList[1];
			largeFonts = fontId;
			console.log(`From Parent click`);
			clearCanvas(ctx, canva);
			loadFont(fontId, userText);
			metrics = ctx.measureText(userText);

			if (largeFonts === 'Amsterdam' || largeFonts === 'RasterSlice') {
				console.log('LARGE CONDITION');
				measureBars(
					metrics,
					textLength,
					barWidthSize,
					barHeight,
					barHeightSize,
					true
				);

				if (screenWidth <= 800) {
					//calculate newHeight bassed on display Var
					setNewHeight(newHeight, 1.5);
				}
			} else {
				measureBars(
					metrics,
					textLength,
					barWidthSize,
					barHeight,
					barHeightSize,
					false
				);
			}
		} else {
			//if it is the child
			largeFonts = target.id;
			clearCanvas(ctx, canva);
			loadFont(target.id, userText);
			metrics = ctx.measureText(userText);

			if (largeFonts === 'Amsterdam' || largeFonts === 'RasterSlice') {
				measureBars(
					metrics,
					textLength,
					barWidthSize,
					barHeight,
					barHeightSize,
					true
				);
				if (screenWidth <= 800) {
					setNewHeight(newHeight, 1.5);
				}
			} else {
				measureBars(
					metrics,
					textLength,
					barWidthSize,
					barHeight,
					barHeightSize,
					false
				);
			}
		}
		//dynamic font sizing
		if (largeFonts === 'Amsterdam' || largeFonts === 'RasterSlice') {
			screenWidth >= 800 ? setFontSize(50) : setFontSize(35);
			if (textLength >= 11) {
				barHeightSize.style.bottom = `-6.4em`;
				barHeightSize.style.left = `-1em`;
			}
		} else {
			screenWidth >= 600 ? setFontSize(70) : setFontSize(60);

			if (
				textLength >= 11 &&
				(largeFonts !== 'Amsterdam' || largeFonts !== 'RasterSlice')
			) {
				barHeightSize.style.top = `-2.7em`;
				barHeightSize.style.right = `1.3em`;
			}
		}

		//navbtns activation
		let targetBtn = e.target.closest('.ui-input-fontFamily-list');
		//loop throught all the lists
		fontBtn.forEach((cls) => {
			//if btnactive match found-remove it
			cls.classList.remove('btn-active');
		});

		//add btn-active class to the existing target list
		targetBtn.classList.add('btn-active');

		//setthe display for bars
		showBars(true);

		return fontClicked;
	});
});

function setFontSize(size) {
	return (display.style.fontSize = `${size}px`);
}

function setNewHeight(newHeight, heightValue) {
	newHeight = parseInt(getComputedStyle(display).height);
	return (barHeight.style.height = `${newHeight / heightValue}px`);
}
