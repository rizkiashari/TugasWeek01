const findLetters = (letter, find) =>{
  letter = document.getElementById("input-text").value;
  find = document.getElementById("find-char").value;

  let result = 0;

  let letterLower = letter.toLowerCase();
  let findLower = find.toLowerCase();

  for(i = 0; i < letterLower.length; i++){
    if(letterLower.charAt(i) === findLower){
      result+=1;
    }
  }
  
  document.getElementById("output-find").innerHTML = "total huruf " + find +" sebanyak " + result+" buah";

  return result;
}