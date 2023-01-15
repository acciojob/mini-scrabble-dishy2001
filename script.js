//your code here
	let stringInput=document.getElementById("evaluatedText");
	
	let leng=0;
stringInput.addEventListener('keydown',(e)=>{
	let len=document.getElementById("length").textContent;
	console.log(len);

	if(stringInput.value == null){
		document.getElementById("length").textContent=0;
		return;
	}
	if(e.key =="Backspace"){
		if(len == 0)
			return;
		document.getElementById("length").textContent =   parseInt(len) - 1;
		return;
	}
	  document.getElementById("length").textContent = stringInput.value.length+1;
  // }
});
