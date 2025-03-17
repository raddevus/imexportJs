// main.js
import {getDateTime} from "./first.js"

addEventListener("load", appmain);

function appmain(){
	console.log("I'm in here.");
	document.querySelector("#date").textContent = getDateTime();
}
