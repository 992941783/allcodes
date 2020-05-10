function Factory () {
	
}

Factory.creat = function(type){
		switch (type){
			case 'xiaobing':
				return Xiaobing();
			case 'paoche':
				return Paoche();
			case 'chaojibing':
				return Chaojibing();
			default:
				break;
		}
	}