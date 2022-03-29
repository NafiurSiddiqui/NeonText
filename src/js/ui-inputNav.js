const uiNav = document.querySelectorAll(".ui-input-nav-list");
const uiInputText = document.querySelector(".ui-input-form.text");
const uiInputFont = document.querySelector(".ui-input-form.fontFamily");
const uiInputColor = document.querySelector(".ui-input-form.color");
const uiForm = document.querySelectorAll(".ui-input-form");

console.log(uiInputText, uiInputFont, uiInputColor);

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

function setValue(e) {
	console.log(e.target.innerText);

	let targetText = e.target.innerText;

	//TEXT NAV
	conditionalSet(targetText, "Text", 1, 2, 0);
	if (
		uiInputFont.classList.contains("ui-active") ||
		uiInputColor.classList.contains("ui-active")
	) {
		uiInputFont.classList.remove("ui-active");
		uiInputColor.classList.remove("ui-active");
	}
	uiInputFont.style.display = "none";
	uiInputColor.style.display = "none";
	uiInputText.classList.add("ui-active");
	//fONT FAMILY
	conditionalSet(targetText, "Font Family", 0, 2, 1);
	//color
	conditionalSet(targetText, "Color", 0, 1, 2);
}

// console.log(checkClass(1));

uiNav.forEach((list) => {
	list.addEventListener("click", setValue);
});
