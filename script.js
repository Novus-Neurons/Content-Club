

let theme = "light";

let light = {};
light.background = "#ffffff";
light.color = "#1b1b1b";
light.anylink = "#7b32d9";
light.themebutton = "Light Mode";	

let dark = {};
dark.background = "#1b1b1b";
dark.color = "#ffffff";
dark.anylink = "#7b32d9";
dark.themebutton = "Dark Mode";

function isMobile() {
	return (window.innerWidth <= 800) && (window.innerHeight <= 800);
}

function SwitchTheme() {
	let current = (theme === "light") ? dark : light;

	document.body.style.background = current.background;
	document.body.style.color = current.color;
	
	document.getElementById("anylink").style.color = current.anylink;
	document.getElementById("themebutton").text = current.themebutton;

	theme = (theme === "light") ? "dark" : "light"; 
}

/* Dynamically set width */
window.addEventListener("resize", () => {
	if(isMobile()) {
		document.body.style.width = "85%";
	}
	else {
		document.body.style.width = "70%";
	}
});

/* Switch to dark theme as soon as page loads */
window.addEventListener("load", () => {
    SwitchTheme();
});