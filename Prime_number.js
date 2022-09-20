
let num=13;
    function primeLoopCheck(num){
  
	for(let i=3;i<=num;i++){
	    let count=0;
	    for(let k=0;k<=i;k++){
	        if(i%k){
	            count++;
	        }
	    }
	    if(count==2){
	        console.log(i);
	    }
	}
}
