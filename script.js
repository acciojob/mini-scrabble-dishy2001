//your code here
let stringInput=document.getElementById("evaluatedText");
let length=document.getElementById("length");
stringInput.addEventListener('keyup',(e)=>{
  if(e.key !=="Escape"){
  let str=stringInput.value;
  length.innerHTML=str.length;
  }
});
