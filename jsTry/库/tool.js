//删除空白节点
function removeSpace(pr){
	var nodes = pr.childNodes;//获取所有子节点
	for(var i = nodes.length - 1; i >= 0; i-- ){
    	if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
			pr.removeChild(nodes[i]);
		}
	}
}

//冒泡排序
function bubble(lis){
	for(var i = 0; i < lis.length - 1; i++){
		for(var j = 0; j < lis.length - 1; j++){
			if(lis[j] < lis[j+1]){
				var tmp = lis[j];
				lis[j] = lis[j+1];
				lis[j+1] = tmp;
			}
		}
	}
}

//选择排序
function choose(lis){
	for(var i = 0; i < lis.length - 1; i++){
		for(var j = i + 1; j < lis.length; j++){
			if(lis[i] > lis[j]){
				var tmp = lis[i];
				lis[i] = lis[j];
				lis[j] = tmp;
			}			
		}
	}
}

//查找class节点浏览器兼容
function elementsByClassName(node, clas){
	var lis = [];
	var a1 = node.getElementsByTagName("*");;
	for(var i = 0; i < a1.length; i++){
		if(a1[i].className == clas){
			lis.push(a1[i]);
		}
	}
	return lis;
}

//获取样式浏览器兼容
function styleAnd(node, csser){
	return node.currentStyle ? node.current[csser] : getComputedStyle(node)[csser];

}

//获取节点封装
function nodePack(node){
	switch(node[0]){
		case "#":
			return document.getElementById(node.substring(1));
			break;
		case ".":
			return elementsByClassName(document, node.substring(1));
			break;
		default:
			var a1 = node.substring(0, 5)
			if(a1 == "name="){
				return document.getElementsByName(node.substring(5));
			}else{
				return document.getElementsByTagName(node);
			}
		break;
	}
}

//创建带文本的节点
function creater(tagName, txt){
	var a1 = document.createElement(tagName);
	var b1 = document.createTextNode(txt);
	a1.appendChild(b1);
	return a1;
}

//插入新节点到旧节点之后
function insertAfter(node, oldnode){
	var parent = oldnode.parentNode;
	if(parent.lastChild == oldnode){
		parent.appendChild(node)
	}else{
		parent.insertBefore(node, oldnode.nextSibling);
	}
}

//添加DOM二级事件兼容
function addeventCom(obj,evt,fun){
	if(obj.attachEvent){
		obj.attachEvent("on"+evt,fun);
	}else{
		obj.addEventListener(evt,fun,false);
	}
}

//删除DOM二级事件兼容
function removeEventCom(obj,evt,fun){
	if(obj.detachEvent){
		obj.detachEvent("on"+evt,fun);
	}else{
		obj.removeEventListener(evt,fun);
	}
}

//cookie增
function setcookie(name,value,date){
	var oDate = new Date;
	oDate.setDate(oDate.getDate()+date);
	document.cookie = name + "=" + value + ";expires=" + oDate;
}
//cookie查
function getcookie(name){
	var str = document.cookie;
	var lis1 = str.split("; ");
	for(var i = 0; i < lis1.length; i++){
		var lis2 = lis1[i].split("=");
		if(lis2[0] == name){
			return lis2[1];
		}
	}
}
//cookie删
function removecookie(name){
	var oDate = new Date;
	oDate.setDate(oDate.getDate()-1);
	var vae = getcookie(name);
	document.cookie = name + "=" + vae + ";expires=" + oDate;
}

//动画封装
function styleAll(node,all){
	clearInterval(node.timerId);
	node.timerId = setInterval(function(){
		for(var i in all){
			var sty = i;
			var end = all[i];
			
			if(i === "opacity"){
				var sty1 = Math.round(parseFloat(styleAnd(node,sty)) * 100);
				// var speed = (end - sty1) / 30;
			}else{
				var sty1 = parseInt(styleAnd(node,sty));
				// var speed = (end - sty1) / 30;
			}
			var speed = (end - sty1) / 30;
			speed < 0 ? Math.ceil(speed) : Math.floor(speed);
			i === "opacity" ? node.style[sty] = (sty1 + speed) / 100 : node.style[sty] = sty1 + speed + "px";
			/*if(i === "opacity"){
				node.style[sty] = (sty1 + speed) / 100;
			}else{
				node.style[sty] = sty1 + speed + "px";
			}
			*/
		}
		

	}, 20)
}