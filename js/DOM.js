/*
Develop: Oleg Chernov
Site: https://litter-css.ru
Version: 2.0
*/

function CreateElement(id, text, element, idElement) {
	var elem = document.createElement(element);
	var text_elem = document.createTextNode(text);
	elem.appendChild(text_elem);
	var root_element = document.getElementById(id);
	root_element.appendChild(elem);
	elem.id = idElement;
	console.log("Item added " + element + " with id " + idElement);
    delete elem,text_elem,root_element;
}

function RemoveElement(selector) {
	var elem = document.querySelector(selector);
	elem.parentNode.removeChild(elem);
	console.log("Removed item with selector " + selecto);
}
function SearchTag(tag) {
	var elem = document.getElementsByTagName(tag);
	console.log(elem.length);
	return elem.length;
}

function SearchClass(classT) {
	var elem = document.getElementsByClassName(classT);
	console.log("class: " + elem.length);
	return elem.length;
}

function SetText(selector, text) {
	var elem = document.querySelector(selector);
	elem.innerHTML = text;
    delete elem;
}

function AppendText(selector, text) {
	var elem = document.querySelector(selector);
	var text_element = document.createTextNode(text);
	elem.appendChild(text_element);
	var result = "";
     delete elem,text_element;
}

function CreateImg(id, src, width, height, selector) {
    var elem = document.createElement("img");
    elem.src = src;
    elem.id = id;
    elem.style.width = width;
    elem.style.height = height;
    var root_element = document.querySelector(selector);
    root_element.appendChild(elem);	
   delete elem,root_element;
}

function EditHref(selector, valueAttr) {
	var elem = document.querySelector(selector);
	elem.href = valueAttr;
     delete elem;
}
