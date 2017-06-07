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

function connect(src){
	let elem = document.createElement('script');
	elem.src = src;
	document.head.appendChild(elem);
}