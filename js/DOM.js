/*
Develop: Oleg Chernov
Site: http://litter-css.ru
Version: 1.2
*/

function CreateElement(id, text, element, idElement) {
	let elem = document.createElement(element);
	let text_elem = document.createTextNode(text);
	elem.appendChild(text_elem);
	let root_element = document.getElementById(id);
	root_element.appendChild(elem);
	elem.id = idElement;
	console.log("Item added " + element + " with id " + idElement);
}

function RemoveElement(id) {
	let el = document.getElementById(id);
	el.parentNode.removeChild(el);
	console.log("Removed item with id " + id);
}
function SearchTag(tag) {
	let element = document.getElementsByTagName(tag);
	console.log(element.length);
	return element.length;
}

function SearchClass(classT) {
	let element = document.getElementsByClassName(classT);
	console.log("class: " + element.length);
	return element.length;
}

function SetText(id, text) {
	let element = document.getElementById(id);
	element.innerHTML = text;
}

function AppendText(id, text) {
	let element = document.getElementById(id);
	let text_element = document.createTextNode(text);
	element.appendChild(text_element);
	var result = "";
}

function CreateImg(id, src, width, height, idElement) {
    let elem = document.createElement("img");
    elem.src = src;
    elem.id = id;
    elem.style.width = width;
    elem.style.height = height;
	let root_element = document.getElementById(id);
	root_element.appendChild(elem);	
}

function EditHref(idElement, valueAttr) {
	let element = document.getElementById(idElement);
	element.href = valueAttr;
}

//Testing version

function Dom(root = document.body) {
// root - элемент в котором будут происходить действия
	this.root = root;
	if (root != document.body) {
		this.root = document.quer
	}

	this.createElement = functio(element, node) {
		let text_elem = document.createTextNode(node);
		elem.appendChild(text_elem);
		let root_element = document.getElementById(id);
		root_element.appendChild(elem);
		elem.id = idElement;
	}
}