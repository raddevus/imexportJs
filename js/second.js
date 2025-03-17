// second.js
// to discover if imported functions can access the DOM elements

export function writeValueToDOM(value){
	console.log("i'm in s3cond.js");
	const para = document.createElement("p");
	para.textContent = value;
	document.body.appendChild(para);
}

export function addNewNode() {
    // Create a new paragraph element
    const newElement = document.createElement('p');
    newElement.textContent = 'Hello from the imported function!';

    // Append it to the body or any specific element
    document.body.appendChild(newElement);
}
