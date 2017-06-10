document.querySelector('.open').onclick = function() {
	let a = document.querySelector('.topnav');
	if (a.className === 'topnav') {
		a.className += ' responsive';
	}else{
		a.className = 'topnav';
	}
}