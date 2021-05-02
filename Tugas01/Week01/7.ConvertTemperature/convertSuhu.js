function suhu(){
  let suhu_saatIni = document.getElementById("suhu-sekarang").value;
  let inputSuhu = document.getElementById("suhu-input").value;
  let suhuConvert = document.getElementById("suhu-konversi").value;

  let result = 0;

  switch (suhu_saatIni) {
    case "Reamur":
      if( suhuConvert === "Celcius"){
        result = 1.25 * inputSuhu;
      }
      else if(suhuConvert === "Fahrenheit"){
        result = (2.25 * inputSuhu) + 32;
      }
      else if(suhuConvert === "Kelvin"){
        result = (1.25 * inputSuhu) + 273;
      }
      break;
    case "Celcius":
      if(suhuConvert === "Reamur"){
        result = 0.8 * inputSuhu;
      }
      else if(suhuConvert === "Fahrenheit"){
        result = (1.8 * inputSuhu) + 32;
      }
      else if(suhuConvert === "Kelvin"){
        result = inputSuhu + 273;
      }
      break;
    case "Fahrenheit":
      if(suhuConvert === "Reamur"){
        result = 0.44 * (inputSuhu - 32);
      }
      else if(suhuConvert === "Celcius"){
        result = 0.56 * (inputSuhu - 32);
      }
      else if(suhuConvert === "Kelvin"){
        result = 0.56 * (inputSuhu - 32) + 273;
      }
      break;
    case "Kelvin":
      if(suhuConvert === "Celcius"){
        result = inputSuhu - 273;
      }
      else if(suhuConvert === "Fahrenheit"){
        result = 1.8 * (inputSuhu - 273) + 32;
      }
      else if(suhuConvert === "Reamur"){
        result = 0.8 * (inputSuhu - 273);
      }
      break;
  }

  document.getElementById("output-suhu").innerHTML = result + " dari " + suhu_saatIni + " ke " + suhuConvert; 

}