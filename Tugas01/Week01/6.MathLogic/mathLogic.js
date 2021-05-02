
let convertRupiah = (angka) => {
  let rupiah = ' ';
  reverseAngka = angka.toString().split('').reverse().join('');
  
  for(i = 0; i < reverseAngka.length; i++){
    if(i % 3 === 0){
      rupiah += reverseAngka.substr(i, 3)+ '.'
    }
  }
  return "Rp " +rupiah.split('', rupiah.length-1).reverse().join('')+",00";
}

const salary = () => {
  let name = document.getElementById("name-input").value;
  let golongan = document.getElementById("golongan-input").value;
  let time = document.getElementById("time-input").value;

  let salaryDay = 0;
  let salaryMonth = 0;
  let overtimeSalary = 0;
  let monthWork = (time * 30);

  let result = 0;

  let resultConvert;
  let salaryDayConvert;
  let salaryMonthConvert;
  let overtimeConvert;

  if(golongan === 'A'){
    
    if(monthWork > 200){
      salaryDay = time * 1000;
      salaryMonth = monthWork * 1000;
      overtimeSalary = monthWork * 200;
    }
    else{
      salaryDay = time * 1000;
      salaryMonth = monthWork * 1000;
    }
  }
  else if(golongan === 'B'){
    if(monthWork > 200){
      salaryDay = time * 2000;
      salaryMonth = monthWork * 2000;
      overtimeSalary = monthWork * 200;
    }
    else{
      salaryDay = time * 2000;
      salaryMonth = monthWork * 2000;
    }
  }
  else if(golongan === 'C'){
    if(monthWork > 200){
      salaryDay = time * 3000;
      salaryMonth = monthWork * 3000;
      overtimeSalary = monthWork * 200;
    }
    else{
      salaryDay = time * 3000;
      salaryMonth = monthWork * 3000;
    }
  }
  else{
    if(monthWork > 200){
      salaryDay = time * 4000;
      salaryMonth = monthWork * 4000;
      overtimeSalary = monthWork * 200;
    }
    else{
      salaryDay = time * 4000;
      salaryMonth = monthWork * 4000;
    }
  }
  
  result = salaryMonth + overtimeSalary;

  resultConvert = convertRupiah(result);
  salaryDayConvert = convertRupiah(salaryDay);
  salaryMonthConvert = convertRupiah(salaryMonth);
  overtimeConvert = convertRupiah(overtimeSalary);

  document.getElementById("convert-output").innerHTML = "Nama: "+ name +"<br/>Golongan: "+ golongan + "<br/>Gaji Perhari: "+salaryDayConvert + "<br/>Gaji Perbulan: "+ salaryMonthConvert + "<br/>Lembur: "+ overtimeConvert +"<br/>Total Keseluruhan: "+resultConvert;
}