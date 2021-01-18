function rem(){
	//根据设备的宽设置html的字体大小
	document.documentElement.style.fontSize = document.documentElement.clientWidth/7.5 + "px";
}
rem();
//当窗口改变时，
window.onresize = rem;
//1rem = 100px