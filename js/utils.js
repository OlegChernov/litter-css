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
function randbg(arr,obj,el=arr.length) {
         el--;
         let elem = document.querySelector(obj);
		let rand = Math.round(Math.random() * el);
		elem.style.backgroundColor = arr[rand];
	}
function calc(str){
let i,res; let b="err"; 
let a=""; let c="";
i=(str.indexOf("+")>=0)?str.indexOf("+"):false; 
i=(i!=false)?i:str.indexOf("-"); 
i=(i!=-1)?i:false; 
i=(i!=false)?i:str.indexOf("*"); 
i=(i!=-1)?i:false; 
i=(i!=false)?i:str.indexOf("/");
i=(i!=-1)?i:false;
i=(i!=false)?i:str.indexOf("%");
i=(i!=-1)?i:false;
i=(i!=false)?i:str.indexOf("^");
i=(i!=-1)?i:false;
if(i!=false) b=str[i];
for(j=0;j<i;j++){
   a+=str[j]; //1 st number(type is string)
}
for(z=i+1;z<=str.length;z++){
   c+=str[z]; 
//2 number(type is string)
}
a=parseInt(a); //parse 1 st umber
c=parseInt(c); //parse 2 nd number
switch(b){
   case "+":
   res=a+c;
   break;
   case "-":
   res=a-c;
   break;
   case "*":
   res=a*c;
   break;
   case "/":
   res=a/c;
   break;
   case "%":
   res=a%c;
   break;
   case "^":
   res=Math.pow(a,c);
   break;
   default:
   res="Error";
}
delete a,c,b,z,j,i; //delete all vars except res 
return res;
}

