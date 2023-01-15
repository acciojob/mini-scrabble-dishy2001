//your code here
let stringInput=document.getElementById("evaluatedText");
let length=document.getElementById("length");
stringInput.addEventListener('keypress',(e)=>{
  // if(e.key !=="Escape"){
  let str=stringInput.value;
	if(str == null){
		return;
	}
  length.innerHTML=str.length+1;
  // }
});
