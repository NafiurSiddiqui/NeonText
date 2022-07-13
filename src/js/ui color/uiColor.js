import { globalVar } from "../globalVariables";
import { lastColorState, neonState } from "../neonSwitch";
let { display, colorList, neonSwitch } = globalVar;
let bulbDom = document.querySelectorAll(".fa.fa-lightbulb-o");

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
export let listColor = "";

export function setColor(color) {
	if (neonState !== false) {
		display.style.textShadow = `rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,
		${color} 0px 0px 20px, ${color} 0px 0px 30px,
		${color} 0px 0px 40px, ${color} 0px 0px 55px,
		${color} 0px 0px 75px`;
	} else {
		display.style.textShadow = "none";
	}
}

export function checkColor(listColor) {
	let response = colorPalette.filter((color) => {
		//get the matched colorId
		return listColor.includes(color.id);
	});

	return response.map((code) => code.code);
}

function setGlowingLight(bulb, targetColor, glowLight = 0, listColor) {
	if (glowLight === 1) {
		bulb.style.textShadow = `0 0 4px white, 0 0 4px ${targetColor}, 0 0 8px ${targetColor},
		0 0 12px ${targetColor}, 0 0 16px ${targetColor}, 0 0 18px ${targetColor}`;
		bulb.style.color = "rgb(248, 248, 248)";
	} else {
		bulb.style.textShadow = "none";
		bulb.style.color = `${checkColor(listColor)}`;
	}
}

let btnActivate;

colorList.forEach((list) => {
	//HOVER STATE
	list.addEventListener("mouseenter", (e) => {
		let targetColor = e.target.classList[1];
		let bulb = e.target.firstElementChild;
		setGlowingLight(bulb, checkColor(targetColor), 1);
	});

	list.addEventListener("mouseleave", (e) => {
		// let targetColor = e.target.classList[1];
		listColor = e.target.classList[1];
		let bulb = e.target.firstElementChild;

		if (bulb.dataset.active === "true") {
			setGlowingLight(bulb, checkColor(listColor), 1, listColor);
		} else {
			setGlowingLight(bulb, checkColor(listColor), 0, listColor);
		}
	});
	// ACTIONS
	list.addEventListener("click", (e) => {
		//wherever color is clicked, alwyas make it happen on the parent -> <li>
		let listEl = e.target.closest("li");
		let bulb = listEl.firstElementChild;
		console.log(bulb);
		//send the color to whoever needs it
		listColor = listEl.classList[1];
		//if the neonSwitch is unchecked, alert to turn the switchOn
		if (neonSwitch.checked !== true) {
			alert("Please turn the neon switch on.");
			return;
		}
		//if the list color is equal to other custom color

		bulbDom.forEach((li) => {
			li.dataset.active = false;
		});

		//activate button
		bulb.dataset.active = true;

		//check if any other bulbData is true or empty
		//set btn glow
		if (bulb.dataset.active === "true") {
			btnActivate = true;
			bulbDom.forEach((bulb) => {
				//get each bulbs color
				setGlowingLight(
					bulb,
					checkColor(bulb.dataset.color),
					0,
					bulb.dataset.color
				);
			});

			setGlowingLight(bulb, checkColor(listColor), 1, listColor);
		} else {
			btnActivate = false;
		}
		//set color
		setColor(checkColor(listColor));
		lastColorState.color = listColor;
		return listColor;
	});
});
