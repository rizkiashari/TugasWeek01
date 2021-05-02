function convertValue(numVal){
  numVal = document.getElementById("convert-input").value;

  let convertNum = " ";

  if(numVal > 100){
    alert("Angka yang diinputkan salah");
  }
  else if(numVal>=86 && numVal <=100){
    convertNum = 'A';
  }
  else if(numVal>=70 && numVal <=85){
    convertNum = 'B';
  }
  else if(numVal>=50 && numVal <=69){
    convertNum = 'C';
  }
  else if(numVal>=30 && numVal <=49){
    convertNum = 'D';
  }
  else{
    convertNum = 'E';
  }

  document.getElementById("convert-output").innerHTML = convertNum;

  return convertNum;
}