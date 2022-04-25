import { globalVar } from "./globalVariables";
import { checkColor, listColor, setColor } from "./ui color/uiColor";

let { neonSwitch, display } = globalVar;

neonSwitch.checked = true;

export let neonState;
export let lastColorState = { color: "" };

export function neonOn() {
	if (neonSwitch.checked === true) {
		display.classList.add("neonOn");
		neonState = true;
		if (lastColorState.color !== "") {
			setColor(checkColor(lastColorState.color));
		} else {
			setColor("rgb(255, 144, 255)");
		}
	} else {
		display.classList.remove("neonOn");
		neonState = false;
		setColor(checkColor(lastColorState.color));
	}
}

neonSwitch.addEventListener("click", neonOn);

/**
 * @lastColorState - to get the last navColor clicked, to update the color here as well
 * had to export it as object, otherwise this is only 'Read-only'
 */
