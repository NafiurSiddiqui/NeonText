import { globalVar } from "../globalVariables";
let { display, colorList, neonSwitch } = globalVar;

const colorPalette = [
	{ id: "orange", code: "orange" },
	{ id: "lightRed", code: "rgb(255, 117, 117)" },
	{ id: "red", code: "red" },
	{ id: "deepBlue", code: "rgb(2, 116, 252)" },
	{ id: "electricBlue", code: "rgb(99, 170, 255)" },
	{ id: "tropicalBlue", code: "rgb(36, 183, 222)" },
	{ id: "iceBlue", code: "rgb(144, 220, 255)" },
	{ id: "green", code: "#20f020" },
	{ id: "mintGreen", code: "rgb(128, 255, 217)" },
	{ id: "deepGreen", code: "rgba(14, 185, 14, 0.884)" },
	{ id: "warmWhite", code: "rgb(240, 238, 199)" },
	{ id: "white", code: "rgb(225, 227, 230)" },
];

let listColor = "";

function setColor(color) {
	display.style.textShadow = `rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,
		${color} 0px 0px 20px, ${color} 0px 0px 30px,
		${color} 0px 0px 40px, ${color} 0px 0px 55px,
		${color} 0px 0px 75px`;
}

function checkColor(listColor) {
	let response = colorPalette.filter((color) => {
		//get the matched colorId
		return listColor.includes(color.id);
	});

	// console.log(Object.assign({}, response));
	console.log(response.map((code) => code.code));
	return response.map((code) => code.code);
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
		console.log(listColor);
		//set color
		setColor(checkColor(listColor));
	});
});

// console.log(listColor);

// setColor(listColor);
