import { globalVar } from "./globalVariables";

let { neonSwitch, display } = globalVar;

neonSwitch.checked = true;

neonSwitch.addEventListener("click", () => {
	if (neonSwitch.checked === true) {
		display.classList.add("neonOn");
	} else {
		display.classList.remove("neonOn");
	}
});
