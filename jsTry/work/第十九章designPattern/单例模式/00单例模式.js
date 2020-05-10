function sing () {
	if(!sing.sings){
		sing.sings = {
			count:30,
			time:function(){
				
			},
			over:{

			},
		}
	}
	return this.sings;
}