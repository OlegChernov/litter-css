document.querySelector('.topnav-default > .open').onclick = function () {
	var a = document.querySelector('.topnav-default');
	if (a.className === 'topnav-default') {
		a.className += ' responsive';
	}else{
		a.className = 'topnav-default';
	}
    delete a;
}

document.querySelector('.topnav-green > .open').onclick = function () {
	var a = document.querySelector('.topnav-green');
	if (a.className === 'topnav-green') {
		a.className += ' responsive';
	}else{
		a.className = 'topnav-green';
	}
      delete a;
}

document.querySelector('.topnav-red > .open').onclick = function () {
	var a = document.querySelector('.topnav-red');
	if (a.className === 'topnav-red') {
		a.className += ' responsive';
	}else{
		a.className = 'topnav-red';
	}
    delete a;
}

document.querySelector('.topnav-blue > .open').onclick = function () {
	var a = document.querySelector('.topnav-blue');
	if (a.className === 'topnav-blue') {
		a.className += ' responsive';
	}else{
		a.className = 'topnav-blue';
	}
   delete a;
}

document.querySelector('.topnav-pink > .open').onclick = function () {
	var a = document.querySelector('.topnav-pink');
	if (a.className === 'topnav-pink') {
		a.className += ' responsive';
	}else{
		a.className = 'topnav-pink';
	}
   delete a;
}
