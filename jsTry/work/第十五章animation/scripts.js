function styleAnd(node,sty){
	return node.getComputedstyle[sty];
}

function prve(){
	var len = document.getElementsByTagName("li1").length;
	var node = document.getElementsByTagName("li1");
	for(var i=0;i<len;i++){
		if(styleAnd(node[i],"opacity") == 1){
			return node[i];
		}
	}
}

function shangyige(){
	var num = prve();
	num.previousElementSibling.style["opacity"] = 1;
	num.style["opacity"] = 0;
}

function next(){
	var num = prve();
	num.nextElementSibling.style["opacity"] = 1;
	num.style["opacity"] = 0;
}

window.onload = function(){
	var but = document.getElementsByTagName("button");
	but[0].onclick = function(){
		shangyige();
	}
	but[1].onclick = function(){
		next();
	}
}
alert(1);
alert(styleAnd(document.getElementsByTagName("li")[0],"opacity"));
