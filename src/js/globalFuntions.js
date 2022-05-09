import { globalVar } from "./globalVariables";

const { heightContainer, widthContainer } = globalVar;

export default function setDisplay(el, on = false) {
	if (on === true) {
		el.style.display = "flex";
	} else {
		el.style.display = "none";
	}
}

export function clearCanvas(ctx, canva) {
	ctx.clearRect(0, 0, canva.width, canva.height);
}

export function writeOnCanvas(ctx, userText) {
	ctx.fillText(userText, 0, 50);
}

export function writeOnCanvasWithFont(ctx, userText, font) {
	ctx.font = `4rem ${font}`;
	ctx.fillStyle = "White";
	ctx.fillText(userText, 0, 50);
}

export function measureBars(
	display,
	metrics,
	barWidth,
	barWidthSize,
	barHeight,
	barHeightSize,
	textLength
) {
	//width
	let displayWidth = getComputedStyle(display).width;
	let displayString = displayWidth.slice(0, -2);
	let displaySize = Math.ceil(+displayString);
	//height
	let height =
		Math.floor(metrics.actualBoundingBoxAscent) +
		Math.floor(metrics.actualBoundingBoxDescent);
	//measurement bars

	barWidth.style.width = `${displaySize}px`;

	barWidthSize.textContent = `${textLength * 2} CM`;
	barHeight.style.height = `${height}px`;
	barHeightSize.textContent = `${Math.floor(height)}Cm`;
}

export function showBars(show) {
	if (show === true) {
		setDisplay(heightContainer, true);
		setDisplay(widthContainer, true);
	} else {
		setDisplay(heightContainer, false);
		setDisplay(widthContainer, false);
	}
}

// export function checkBtnActive(){

// }
