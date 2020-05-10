function col(){
	var sum = 0;
	for(var i = 0; i<100; i++){
		sum += i;
	}
	alert(sum);
}

function add(){
	var sum = 0;
	for(i = 0; i <arguments.length; i++){
		sum += arguments[i]
	}
	alert(sum)
}

function havnum(n){
	var sum = 0;
	for(var i = 0; i < n; i++){
		sum +=i;
	}
	alert(sum)
}

function a(){
	alert(1);
	return 1;
	alert(3)
}