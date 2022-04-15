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

function setValue(e) {
	console.log(e.target.innerText);

	let targetText = e.target.innerText;

	//TEXT NAV
	conditionalSet(
		targetText,
		"Text",
		uiNav,
		1,
		navActive,
		uiNav,
		2,
		navActive,
		uiInputFont,
		uiInputColor,
		uiNav,
		0,
		navActive,
		false,
		uiInputText,
		null,
		uiActive,
		true
	);
	// if (
	// 	uiInputFont.classList.contains("ui-active") ||
	// 	uiInputColor.classList.contains("ui-active")
	// ) {
	// 	uiInputFont.classList.remove("ui-active");
	// 	uiInputColor.classList.remove("ui-active");
	// }

	// if (checkClass(uiInputFont, uiActive) || checkClass(uiInputColor, uiActive)) {
	// 	removeClass(uiInputFont, uiActive);
	// 	removeClass(uiInputColor, uiActive);
	// }

	// toggleDisplay(uiInputFont);
	// toggleDisplay(uiInputColor);
	// setClass(uiInputText, null, uiActive, true);

	// uiInputFont.style.display = "none";
	// uiInputColor.style.display = "none";
	// uiInputText.classList.add("ui-active");

	//fONT FAMILY
	conditionalSet(
		targetText,
		"font Family",
		uiNav,
		0,
		navActive,
		uiNav,
		2,
		navActive,
		uiInputText,
		uiInputColor,
		uiNav,
		1,
		navActive,
		false,
		uiInputFont,
		null,
		uiActive,
		true
	);

	// toggleDisplay(uiInputText);
	// toggleDisplay(uiInputColor);
	// setClass(uiInputFont, null, uiActive, true);
	//color
	// conditionalSet(targetText, "Color", 0, 1, 2);
}

// console.log(checkClass(1));

uiNav.forEach((list) => {
	list.addEventListener("click", setValue);
});
