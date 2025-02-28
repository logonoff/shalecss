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
	console.log(e);

	if (document.documentElement.classList.contains("shale-v1-dark")) {
		// dark mode is enabled, turn it off
		document.documentElement.classList.remove("shale-v1-dark");

		e.querySelector(".icon").classList.remove("icon-moon-fill");
		e.querySelector(".icon").classList.add("icon-moon-stroke");

		localStorage.setItem("theme", "light");
	} else {
		// dark mode is disabled, turn it on
		document.documentElement.classList.add("dark");

		e.querySelector(".icon").classList.remove("icon-moon-stroke");
		e.querySelector(".icon").classList.add("icon-moon-fill");

		localStorage.setItem("theme", "dark");
	}
}

/**
 * toggles contrast theme
 *
 * @param {element} e element whos child has a .icon elem
 */
function toggleContrast(e) {
	console.log(e);

	if (document.documentElement.classList.contains("contrast")) {
		// contrast mode is enabled, turn it off
		document.documentElement.classList.remove("contrast");

		localStorage.setItem("theme", "light");
	} else {
		// contrast mode is disabled, turn it on
		document.documentElement.classList.add("contrast");

		localStorage.setItem("theme", "contrast");
	}
}

/**
 * toggles larger text size
 *
 * @param {element} e element whos child has a .icon elem
 */
function toggleTextSize(e) {
	console.log(e);

	if (document.documentElement.classList.contains("bigger-text")) {
		// larger text size is enabled, turn it off
		document.documentElement.classList.remove("bigger-text");

		e.querySelector(".icon").classList.remove("icon-a-lowercase");
		e.querySelector(".icon").classList.add("icon-a-uppercase");

		localStorage.setItem("textSize", "medium");
	} else {
		// larger text size is disabled, turn it on
		document.documentElement.classList.add("bigger-text");

		e.querySelector(".icon").classList.remove("icon-a-uppercase");
		e.querySelector(".icon").classList.add("icon-a-lowercase");

		localStorage.setItem("textSize", "large");
	}
}

/**
 * loads "theme" and "textSize" items from localStorage and toggles themes accordingly
 */
function loadFromLocalStorage() {
	// !! this will only work if the js embed is at the bottom !! //
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

/*
** kounami code accent colour rainbow thing
** https://stackoverflow.com/a/45576888
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

var r = 255, // pretty sure these have to be global
	g = 0,
	b = 0;

function rainbowz() {
	/*
	** does one iteration of rgb color cycle thing
	** and sets --a-r, --a-g, and --a-b css variables in the process
	*/
	// increment or decrement rgb values
	if (r > 0 && b == 0) {
		r -= 5;
		g += 5;
	}

	if (g > 0 && r == 0) {
		g -= 5;
		b += 5;
	}

	if (b > 0 && g == 0) {
		r += 5;
		b -= 5;
	}

	// overide accent colour variable
	document.documentElement.style.setProperty("--a-r", r + "");
	document.documentElement.style.setProperty("--a-g", g + "");
	document.documentElement.style.setProperty("--a-b", b + "");
}

/* Put both together */
onKonamiCode(function() {
	setInterval(rainbowz, 100);
});

document.querySelectorAll("[data-indeterminate]").forEach((e) => {
	e.indeterminate = true;
});
