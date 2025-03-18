// main.js
import {getDateTime} from "./first.js";
import {writeValueToDOM, addNewNode} from "./second.js";

// importing all items as one JS obj
import * as Utils from "./util.js";

addEventListener("load", appmain);
console.log("loading...");

function appmain(){
	console.log("I'm in here.");
	document.querySelector("#date").textContent = getDateTime();
	let addNodeButton = document.querySelector("#addNodeBtn");
	addNodeButton.addEventListener("click",addNode); 
	document.querySelector("#runUtilsBtn").addEventListener("click", runUtils);
}

function addNode(){
	console.log("in addNode()...");
	let usertext = document.querySelector("#nodeText").value;
	console.log(`usertext : ${usertext}`);
	writeValueToDOM(usertext);
	addNewNode();
	
}

function runUtils(){
	Utils.printFilePath();
	Utils.printSongName();
}
