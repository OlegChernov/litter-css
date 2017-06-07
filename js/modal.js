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