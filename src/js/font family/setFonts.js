import globalFonts from "../globalVariables";
import { globalVar } from "../globalVariables";

//destructured vars
let { fontBtn, fontBtnsWhite, fontBtnBlack } = globalFonts;
let { display, canva, ctx } = globalVar;

//defaults
fontBtnsWhite.forEach((btn) => {
	btn.classList.add("hide");
});

const mouseIn = (event) => {
	let firstChild = event.target.firstElementChild.classList;
	let lastChild = event.target.lastElementChild.classList;
	firstChild.add("hide");
	lastChild.remove("hide");

	// console.log("works");
};

const mouseOut = (event) => {
	let firstChild = event.target.firstElementChild.classList;
	let lastChild = event.target.lastElementChild.classList;

	firstChild.remove("hide");
	lastChild.add("hide");
};

//write the loadFont function

function loadFont(targetFont) {
	//set the targetFont
	//---one for the display
	display.style.fontFamily = targetFont;
	//---one for the canvas
	ctx.font = `4rem ${targetFont} `;
	ctx.fillStyle = "White";
}

//font hover
fontBtn.forEach((btns) => {
	btns.addEventListener("mouseenter", mouseIn);

	btns.addEventListener("mouseleave", mouseOut);

	btns.addEventListener("click", (e) => {
		// console.log();
		let target = e.target;
		//if it is is  the parent
		if (target.className === "ui-input-fontFamily-list") {
			let lastChildId = target.lastElementChild.id;
			console.log(`From Parent : ${lastChildId}`);
			loadFont(lastChildId);
		} else {
			//if it is the child
			console.log(`From Child: ${target.id}`);
			loadFont(target.id);
		}
	});
});

//get the value of the selected font

//set the value of the selected font to display, to canvas

//Helper functions
