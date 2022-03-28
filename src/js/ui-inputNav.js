const uiNav = document.querySelectorAll(".ui-input-nav-list");
const uiInputText = document.querySelector(".ui-input-form-text");
const fontFamilyArea = document.querySelector(".ui-input-fontFamily-lists");
const colorArea = document.querySelector(".ui-input-color-lists");

console.log(uiInputText.style);

function checkClass(child) {
	return uiNav[child].classList.contains("nav-active");
}

function setClass(child) {
	uiNav[child].classList.add("nav-active");
}

function removeClass(child) {
	uiNav[child].classList.remove("nav-active");
}

function toggleDisplay(child, val) {
	// if (uiNav[])
	child.style.display = val;
}

function conditionalSet(targetText, arg1, arg2, arg3, arg4) {
	if (targetText === arg1) {
		if (checkClass(arg2)) {
			removeClass(arg2);
		}
		if (checkClass(arg3)) {
			removeClass(arg3);
		}

		setClass(arg4);
	}
}

// function conditionalSet(...args) {
// 	if (args === args) {
// 		if (checkClass(args)) {
// 			removeClass(args);
// 		}
// 		if (checkClass(args)) {
// 			removeClass(args);
// 		}

// 		setClass(args);
// 		toggleDisplay(args, args);
// 	}
// }

function setValue(e) {
	console.log(e.target.innerText);

	let targetText = e.target.innerText;

	//conditionally set the styling for element

	//TEXT NAV
	conditionalSet(targetText, "Text", 1, 2, 0);

	//fONT FAMILY
	conditionalSet(targetText, "Font Family", 0, 2, 1);
	//color
	conditionalSet(targetText, "Color", 0, 1, 2);
}

// console.log(checkClass(1));

uiNav.forEach((list) => {
	list.addEventListener("click", setValue);
});
