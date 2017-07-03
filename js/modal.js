function showModal(idElement, idBackground) {
	var modal = document.getElementById(idElement); // полчаем id блока
	modal.style.display = "block"; // изменяем видимость
	var back = document.getElementById(idBackground);
	back.style.display = "block"; // показываем фон
	document.body.style.overflow = "hidden"; // запрещаем прокрутку страницы
     delete modal,back;
}

function closeModal(idElement, idBackground) {
	var modal = document.getElementById(idElement); // получаем id блока
	modal.style.display = "none"; // скрываем элемент
	var back = document.getElementById(idBackground);
	back.style.display = "none"; // скрываем фон
	document.body.style.overflow = "scroll"; // разрешаем прокрутку
     delete modal,back;
}
