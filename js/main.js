// main.js
import {getDateTime} from "./first.js";
import {writeValueToDOM, addNewNode} from "./second.js";

addEventListener("load", appmain);
console.log("loading...");

function appmain(){
	console.log("I'm in here.");
	document.querySelector("#date").textContent = getDateTime();
	let addNodeButton = document.querySelector("#addNodeBtn");
	addNodeButton.addEventListener("click",addNode); 
}

function addNode(){
	console.log("in addNode()...");
	let usertext = document.querySelector("#nodeText").value;
	console.log(`usertext : ${usertext}`);
	writeValueToDOM(usertext);
	addNewNode();
	
}
