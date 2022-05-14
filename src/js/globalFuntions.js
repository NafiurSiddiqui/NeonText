import { globalVar } from "./globalVariables";
import { globarPrice } from "./globalVariables";

const { heightContainer, widthContainer } = globalVar;
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
	textLength,
	barWidth,
	barWidthSize,
	barHeight,
	barHeightSize
) {
	//width
	let displayWidth = getComputedStyle(display).width;
	let displayString = displayWidth.slice(0, -2);
	let displaySize = Math.ceil(+displayString);
	//height
	let height =
		Math.floor(metrics.actualBoundingBoxAscent) +
		Math.floor(metrics.actualBoundingBoxDescent);
	let length = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;

	let height2 = getComputedStyle(display).height;
	// console.log(`Height: ${height2}`);

	//measurement bars

	barWidth.style.width = `${displaySize}px`;
	// barWidth.style.width = `${length}px`;
	let widthSize = (barWidthSize.textContent = `${textLength * 2} CM`);
	barHeight.style.height = `${height2}px`;
	let heightSize = (barHeightSize.textContent = `${Math.floor(height)}Cm`);

	return [widthSize, heightSize];
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

export function calculatePricing(textLength) {
	priceSmall.textContent = `$${textLength * 80}`;
	priceMedium.textContent = `$${textLength * 95}`;
	priceLarge.textContent = `$${textLength * 105}`;
}

export function calculateDimension(width, height) {
	priceSmallLength.textContent = `${width} Cm`;
	priceSmallHeight.textContent = `${height} Cm`;
	priceMediumLength.textContent = `${parseInt(width * 2)} Cm`;
	priceMediumHeight.textContent = `${parseInt(height * 1.1)} Cm`;
	priceLargeLength.textContent = `${width * 3} Cm`;
	priceLargeHeight.textContent = `${parseInt(height * 1.3)} Cm`;
}

export const calculation = (
	display,
	metrics,
	textLength,
	barWidth,
	barWidthSize,
	barHeight,
	barHeightSize
) => {
	let cardMeasures = measureBars(
		display,
		metrics,
		textLength,
		barWidth,
		barWidthSize,
		barHeight,
		barHeightSize
	);
	showBars(true);
	let width = parseInt(cardMeasures[0]);
	let height = parseInt(cardMeasures[1]);
	// console.log(width, height);
	calculatePricing(textLength);
	calculateDimension(width, height);
};
