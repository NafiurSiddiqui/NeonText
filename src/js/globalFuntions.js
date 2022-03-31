export default function toggleDisplay(el, on = false) {
	if (on === true) {
		el.style.display = "flex";
	} else {
		el.style.display = "none";
	}
}
