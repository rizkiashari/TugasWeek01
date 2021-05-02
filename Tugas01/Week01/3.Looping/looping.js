// const loopNum = (angka) =>{

//   let kelipatan = prompt("Masukkan Jenis Kenaikan [1 s/d 3]");
//   angka = prompt("Masukkan Angka Looping:");

//   if(kelipatan == 1){
//     for(i = 1; i <= angka; i++){
//       console.log(i);
//     }
//   }
//   else if(kelipatan == 2){
//     for(i = 1; i <= angka; i++){
//       console.log(i*i);
//     }
//   }  
//   else if(kelipatan == 3){
//     for(i = 1; i <= angka; i++){
//       console.log(i*3);
//     }
//   }
//   return angka;
// }

// loopNum();

function looping01(array){
  array = document.getElementById("loopOne-input").value;

  let loop1 = [];

  for(i = 1; i <= array; i++){
    loop1.push(`
      <span> ${i}</span>
    `)
  }

  document.getElementById("output-loopOne").innerHTML = loop1.join(" ");
}

function looping02(array){
  array = document.getElementById("loopTwo-input").value;

  let loop1 = [];

  for(i = 1; i <= array; i++){
    loop1.push(`
      <span> ${i*i}</span>
    `)
  }

  document.getElementById("output-loopTwo").innerHTML = loop1.join(" ");
}

function looping03(array){
  array = document.getElementById("loopThree-input").value;

  let loop1 = [];

  for(i = 1; i <= array; i++){
    loop1.push(`
      <span> ${i*3}</span>
    `)
  }

  document.getElementById("output-loopThree").innerHTML = loop1.join(" ");
}
