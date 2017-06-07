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
function showModal(idElement, idBackground) {
	let modal = document.getElementById(idElement); // полчаем id блока
	modal.style.display = "block"; // изменяем видимость
	let back = document.getElementById(idBackground);
	back.style.display = "block"; // показываем фон
	document.body.style.overflow = "hidden"; // запрещаем прокрутку страницы
}
function closeModal(idElement, idBackground) {
	let modal = document.getElementById(idElement); // получаем id блока
	modal.style.display = "none"; // скрываем элемент
	let back = document.getElementById(idBackground);
	back.style.display = "none"; // скрываем фон
	document.body.style.overflow = "scroll"; // разрешаем прокрутку
}
/* function timeFun(func) {
var time = performance.now();
	for (var i = 0; i <= 1000; i++) {
		console.log(i);
	}
	time = performance.now() - time;
console.log('Время выполнения = ', time);
}
timeFun();
*/
function isEmail(email,len=6) {
 return ((email.length)>=len&&email.indexOf("@")>0&&(email.indexOf("."))>0)?true:false;
}