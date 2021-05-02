const cekAge = () => {
  let age = document.getElementById("usia-input").value;

  let ageChoose;

  if(age >= 0 && age <= 1){
    ageChoose = "Bayi";
  }
  else if(age >= 2 && age <= 10){
    ageChoose = "Anak - anak";
  }
  else if(age >= 11 && age <= 19){
    ageChoose = "Remaja";
  }
  else if(age >= 20 && age <= 60){
    ageChoose = "Dewasa";
  }
  else{
    ageChoose = "Lanjut Usia";
  }

  document.getElementById("output-umur").innerHTML = age + " maka kamu sudah "+ ageChoose;

  return ageChoose;
}