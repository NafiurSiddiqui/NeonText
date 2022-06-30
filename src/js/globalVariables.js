const uiNav = document.querySelectorAll('.ui-input-nav-list');
const uiInputText = document.querySelector('.ui-input-form.text');
const uiInputFont = document.querySelector('.ui-input-form.fontFamily');
const uiInputColor = document.querySelector('.ui-input-form.color');
const uiForm = document.querySelectorAll('.ui-input-form');
const display = document.querySelector('.ui-display-userText-text');
const displayWrapper = document.querySelector('.ui-display-userText-wrapper');
const canva = document.getElementById('displayText');

const ctx = canva.getContext('2d');

//-----------measurement bars
let barWidthSize = document.querySelector('.measurementBar-width-length');
const heightContainer = document.querySelector(
	'.measurementBar-height-wrapper'
);

const height = document.querySelector('.measurementBar-height-length');

const barHeight = document.querySelector('.measurementBar-height');
const barHeightSize = document.querySelector('.measurementBar-height-length');

//font family
let fontBtn = document.querySelectorAll('.ui-input-fontFamily-list');
let fontBtnsBlack = document.querySelectorAll(
	'.ui-input-fontFamily-list__image'
);

//neonSwitch
const neonSwitch = document.getElementById('neonSwitch');
//colorList
const colorList = document.querySelectorAll('.input-color-list');
//exporting these as globalVariable
export const globalVar = {
	uiNav,
	uiInputText,
	uiInputFont,
	uiInputColor,
	uiForm,
	display,
	displayWrapper,
	canva,
	ctx,
	barWidthSize,
	height,
	heightContainer,
	barHeight,
	barHeightSize,
	neonSwitch,
	colorList,
};

let globalFonts = {
	fontBtn,
	fontBtnsBlack,
};

export default globalFonts;

//--------------Pricing cards

let priceSmall = document.querySelector('.ui-price-card__small-price');
let priceSmallLength = document.querySelector('.ui-price-card__small-length');
let priceSmallHeight = document.querySelector('.ui-price-card__small-height');

let priceMedium = document.querySelector('.ui-price-card__medium-price');
let priceMediumLength = document.querySelector('.ui-price-card__medium-length');
let priceMediumHeight = document.querySelector('.ui-price-card__medium-height');

let priceLarge = document.querySelector('.ui-price-card__large-price');
let priceLargeLength = document.querySelector('.ui-price-card__large-length');
let priceLargeHeight = document.querySelector('.ui-price-card__large-height');

export let globarPrice = {
	priceSmall,
	priceSmallLength,
	priceSmallHeight,
	priceMedium,
	priceMediumLength,
	priceMediumHeight,
	priceLarge,
	priceLargeHeight,
	priceLargeLength,
};
