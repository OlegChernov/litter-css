/*
Develop: Oleg Chernov
Site: https://litter-css.ru
Version: 1.3
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

function RemoveElement(selector) {
	let elem = document.querySelector(selector);
	elem.parentNode.removeChild(elem);
	console.log("Removed item with selector " + selecto);
}
function SearchTag(tag) {
	let elem = document.getElementsByTagName(tag);
	console.log(elem.length);
	return elem.length;
}

function SearchClass(classT) {
	let elem = document.getElementsByClassName(classT);
	console.log("class: " + elem.length);
	return elem.length;
}

function SetText(selector, text) {
	let elem = document.querySelector(selector);
	elem.innerHTML = text;
}

function AppendText(selector, text) {
	let elem = document.querySelector(selector);
	let text_element = document.createTextNode(text);
	elem.appendChild(text_element);
	var result = "";
}

function CreateImg(id, src, width, height, selector) {
    let elem = document.createElement("img");
    elem.src = src;
    elem.id = id;
    elem.style.width = width;
    elem.style.height = height;
	let root_element = document.querySelector(selector);
	root_element.appendChild(elem);	
}

function EditHref(selector, valueAttr) {
	let elem = document.querySelector(selector);
	elem.href = valueAttr;
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
document.querySelector('.open').onclick = function() {
	let a = document.querySelector('.topnav');
	if (a.className === 'topnav') {
		a.className += ' responsive';
	}else{
		a.className = 'topnav';
	}
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

function reqJs(src){
	let elem = document.createElement('script');
	elem.src = src;
	document.head.appendChild(elem);
}

function reqCss(src){
	let elem = document.createElement('link');
	elem.rel = "stylesheet";
	elem.type = "text/css";
	elem.href = src;
	document.head.appendChild(elem);
}