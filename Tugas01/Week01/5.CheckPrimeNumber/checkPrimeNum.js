
const primeNum = (angka) => {
  angka = document.getElementById("prime-input").value;
  
  let changeAngka = parseInt(angka);

  if(changeAngka === 1){
    document.getElementById("output-prime").innerHTML = angka + " adalah bukan bilangan Prima";
  }
  else if (changeAngka === 2 || changeAngka === 3){
    document.getElementById("output-prime").innerHTML = angka + " adalah bilangan Prima";
  }
  else if(changeAngka % 2 === 0 || changeAngka % 3 === 0){
    document.getElementById("output-prime").innerHTML = angka + " adalah bukan bilangan Prima";
  }
  else
  {
    document.getElementById("output-prime").innerHTML = angka + " adalah bilangan Prima";
  }

}