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

function isEmail(email,len) {
len=(len===undefined)?6:len;
 return ((email.length)>=len&&email.indexOf("@")>0&&(email.indexOf("."))>0)?true:false;
}

function reqJs(src){
	var elem = document.createElement('script');
	elem.src = src;
	document.head.appendChild(elem);
     delete elem;
}

function reqCss(src){
	var elem = document.createElement('link');
	elem.rel = "stylesheet";
	elem.type = "text/css";
	elem.href = src;
	document.head.appendChild(elem);
        delete elem;
}
function randbg(arr,obj,el) {
          el=(el===undefined)?arr.length:el;
          el--;
          var elem = document.querySelector(obj);
		var rand = Math.round(Math.random() * el);
		elem.style.backgroundColor = arr[rand];
          delete elem,rand;
	}
