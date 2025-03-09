/*
** shalecss
*/
"use strict";

/**
 * toggles dark theme
 *
 * @param {element} e element whos child has a .icon elem
 */
function toggleDark(e) {
	if (document.documentElement.classList.contains("shale-v1-dark")) {
		// dark mode is enabled, turn it off
		document.documentElement.classList.remove("shale-v1-dark");

		e.querySelector(".shale-v1-icon").classList.remove("icon-moon-fill");
		e.querySelector(".shale-v1-icon").classList.add("icon-moon-stroke");

		localStorage.setItem("theme", "light");
	} else {
		// dark mode is disabled, turn it on
		document.documentElement.classList.add("shale-v1-dark");

		e.querySelector(".shale-v1-icon").classList.remove("icon-moon-stroke");
		e.querySelector(".shale-v1-icon").classList.add("icon-moon-fill");

		localStorage.setItem("theme", "dark");
	}
}

/**
 * toggles contrast theme
 *
 * @param {element} e element whos child has a .icon elem
 */
function toggleContrast(e) {
	if (document.documentElement.classList.contains("shale-v1-contrast")) {
		// contrast mode is enabled, turn it off
		document.documentElement.classList.remove("shale-v1-contrast");

		localStorage.setItem("theme", "light");
	} else {
		// contrast mode is disabled, turn it on
		document.documentElement.classList.add("shale-v1-contrast");

		localStorage.setItem("theme", "contrast");
	}
}

/**
 * toggles larger text size
 *
 * @param {element} e element whos child has a .icon elem
 */
function toggleTextSize(e) {
	if (document.documentElement.classList.contains("shale-v1-bigger-text")) {
		// larger text size is enabled, turn it off
		document.documentElement.classList.remove("shale-v1-bigger-text");

		e.querySelector(".shale-v1-icon").classList.remove("icon-a-lowercase");
		e.querySelector(".shale-v1-icon").classList.add("icon-a-uppercase");

		localStorage.setItem("textSize", "medium");
	} else {
		// larger text size is disabled, turn it on
		document.documentElement.classList.add("shale-v1-bigger-text");

		e.querySelector(".shale-v1-icon").classList.remove("icon-a-uppercase");
		e.querySelector(".shale-v1-icon").classList.add("icon-a-lowercase");

		localStorage.setItem("textSize", "large");
	}
}

/*
 * loads "theme" and "textSize" items from localStorage and toggles themes accordingly
 */
function loadFromLocalStorage() {
	// dark
	if (localStorage.getItem("theme") == "dark") {
		toggleDark(document.querySelector(".js-darkmode"));
	}

	// contrast
	if (localStorage.getItem("theme") == "contrast") {
		toggleContrast(document.querySelector(".js-contrast"));
	}

	// text size
	if (localStorage.getItem("textSize") == "large") {
		toggleTextSize(document.querySelector(".js-textsize"));
	}
}

loadFromLocalStorage();

document.querySelectorAll("[data-indeterminate]").forEach((e) => {
	e.indeterminate = true;
});


/*
 * kounami code accent colour rainbow thing
 * https://stackoverflow.com/a/45576888
 */
function onKonamiCode(cb) {
	var input = "";
	var key = "38384040373937396665";
	document.addEventListener("keydown", function(e) {
		input += ("" + e.keyCode);
		if (input === key) {
			return cb();
		}
		if (!key.indexOf(input)) return;
		input = ("" + e.keyCode);
	});
}

function rainbowz() {
	// get rgb value of previous accent colour
	let rgb = document.documentElement.style.getPropertyValue("--shale-v1-accent");
	rgb = rgb ? rgb.match(/\d+/g) : [255, 0, 0];
	let r = parseInt(rgb[0]);
	let g = parseInt(rgb[1]);
	let b = parseInt(rgb[2]);

	// increment or decrement rgb values
	if (r > 0 && b == 0) {
		r -= 1;
		g += 1;
	}

	if (g > 0 && r == 0) {
		g -= 1;
		b += 1;
	}

	if (b > 0 && g == 0) {
		r += 1;
		b -= 1;
	}

	// overide accent colour variable
	document.documentElement.style.setProperty("--shale-v1-accent", `rgb(${r}, ${g}, ${b})`);
}

/* Put both together */
onKonamiCode(function() {
	setInterval(rainbowz, 10);
});
