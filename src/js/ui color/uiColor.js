import { globalVar } from "../globalVariables";
let { display, colorList, neonSwitch } = globalVar;

const colorPalette = {
	orange: "orange",
	lightRed: "rgb(255, 117, 117)",
	red: "red",
	deepBlue: "rgb(2, 116, 252)",
	electricBlue: "rgb(99, 170, 255)",
	tropicalBlue: "rgb(36, 183, 222)",
	iceBlue: "rgb(144, 220, 255)",
	green: "#20f020",
	mintGreen: "rgb(128, 255, 217)",
	deepGreen: "rgba(14, 185, 14, 0.884)",
	warmWhite: "rgb(240, 238, 199)",
	white: "rgb(225, 227, 230)",
};

let listColor = "";

function setColor(color) {
	display.style.textShadow = `rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,
		${color} 0px 0px 20px, ${color} 0px 0px 30px,
		${color} 0px 0px 40px, ${color} 0px 0px 55px,
		${color} 0px 0px 75px`;
}

console.log(display);
colorList.forEach((list) => {
	list.addEventListener("click", (e) => {
		console.log(e.target);
		//wherever it is clicked, alwyas make it happen on the parent <li>
		let listEl = e.target.closest("li");
		//send the color to whoever needs it
		listColor = listEl.classList[1];

		//if the neonSwitch is unchecked, alert to turn the switchOn
		if (neonSwitch.checked !== true) {
			alert("Please turn the neon switch on.");
			return;
		}
		//if the list color is equal to other custom color
		//  if (listColor === )

		//set color
		setColor(listColor);
	});
});

// console.log(listColor);

// setColor(listColor);
