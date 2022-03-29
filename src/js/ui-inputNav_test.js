const uiNav = document.querySelectorAll(".ui-input-nav-list");
const uiInputText = document.querySelector(".ui-input-form.text");
const uiInputFont = document.querySelector(".ui-input-form.fontFamily");
const uiInputColor = document.querySelector(".ui-input-form.color");
const uiForm = document.querySelectorAll(".ui-input-form");

console.log(uiNav, uiInputText, uiInputFont, uiInputColor);

function checkClass(el, child, className) {
	// return uiNav[child].classList.contains("nav-active");
	return (el[child] || el).classList.contains(className);
}

function setClass(el, child, className, single = false) {
	// uiNav[child].classList.add("nav-active");
	if (single === true) {
		//returns element only
		return el.classList.add(className);
	} else {
		//returns element from an array like uiNav
		return el[child].classList.add(className);
	}
}

function removeClass(el, child, className) {
	// uiNav[child].classList.remove("nav-active");
	(el[child] || el).classList.remove(className);
}

function toggleDisplay(el, on) {
	if (on) {
		el.style.display = "flex";
	} else {
		el.style.display = "none";
	}
}

function conditionalSet(targetText, val, ...args) {
	//refer to the individual function arguments in case of confusion

	if (targetText === val) {
		if (checkClass(args[0], args[1], args[2])) {
			removeClass(args[0], args[1], args[2]);
		}
		if (checkClass(args[3], args[4], args[5])) {
			removeClass(args[3], args[4], args[5]);
		}
		toggleDisplay(args[6]);
		toggleDisplay(args[7]);
		setClass(args[8], args[9], args[10], args[11]);
		setClass(args[12], args[13], args[14], args[15]);
	}
}

//for quick referencing
const navActive = "nav-active";
const uiActive = "ui-active";
//state checking
let textNavState;
let textUiState;
let fontNavState;
let fontUiState;
let colorNavState;
let colorUiState;

function setValue(e) {
	console.log(e.target.innerText);

	let targetText = e.target.innerText;

	//TEXT NAV
	if (targetText === "Text") {
		//check and remove any nav Activation
		if (
			uiNav[1].classList.contains(navActive) ||
			uiNav[2].classList.contains(navActive)
		) {
			uiNav[1].classList.remove(navActive);
			uiNav[2].classList.remove(navActive);
			fontNavState = false;
			colorNavState = false;
		}
		//check and remove any uiActivation
		if (
			uiInputFont.classList.contains(uiActive) ||
			uiInputColor.classList.contains(uiActive)
		) {
			uiInputFont.classList.remove(uiActive);
			uiInputColor.classList.remove(uiActive);
			fontUiState = false;
			colorUiState = false;
		}

		//activate text Nav
		uiNav[0].classList.add(navActive);
		textNavState = true;
		//activate text input area
		// uiInputText.style.display = "flex";
		uiInputText.classList.add(uiActive);
		//set the state to true
		textUiState = true;
	}

	//font famly

	if (targetText === "Font Family") {
		//check and remove any nav Activation
		if (
			uiNav[0].classList.contains(navActive) ||
			uiNav[2].classList.contains(navActive)
		) {
			uiNav[0].classList.remove(navActive);
			uiNav[2].classList.remove(navActive);
			textNavState = false;
			colorNavState = false;
		}
		//check and remove any uiActivation
		if (
			uiInputText.classList.contains(uiActive) ||
			uiInputColor.classList.contains(uiActive)
		) {
			uiInputText.classList.remove(uiActive);
			uiInputColor.classList.remove(uiActive);
			textUiState = false;
			colorUiState = false;
		}

		//activate text Nav
		uiNav[1].classList.add(navActive);
		fontNavState = true;
		//activate text input area
		// uiInputFont.style.display = "flex";
		uiInputFont.classList.add(uiActive);
		//set the state to true
		fontUiState = true;
	}

	//color
	if (targetText === "Color") {
		//check and remove any nav Activation
		if (
			uiNav[0].classList.contains(navActive) ||
			uiNav[1].classList.contains(navActive)
		) {
			uiNav[0].classList.remove(navActive);
			uiNav[1].classList.remove(navActive);
			textNavState = false;
			fontNavState = false;
		}
		//check and remove any uiActivation
		if (
			uiInputText.classList.contains(uiActive) ||
			uiInputFont.classList.contains(uiActive)
		) {
			uiInputText.classList.remove(uiActive);
			uiInputFont.classList.remove(uiActive);
			textUiState = false;
			fontUiState = false;
		}

		//activate text Nav
		uiNav[2].classList.add(navActive);
		colorNavState = true;
		//activate text input area
		// uiInputFont.style.display = "flex";
		uiInputColor.classList.add(uiActive);
		//set the state to true
		colorUiState = true;
	}
}

// console.log(checkClass(1));

uiNav.forEach((list) => {
	list.addEventListener("click", setValue);
});
