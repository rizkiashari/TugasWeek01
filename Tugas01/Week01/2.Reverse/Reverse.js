// 2 Reverse 
function reverseNum(array){
  array = document.getElementById("reverse-input").value;

  let backward = "";
  
  for(i = array.length-1; i >= 0 ; i--){
    backward += array[i];
  }
  document.getElementById("output-rev").innerHTML = backward;
  return ;
}