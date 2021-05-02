// 1. Function

// Regular Function
function sayHello(said){
  said = document.getElementById("regular-input").value;

  document.getElementById("output-reg").innerHTML = said;

  return said;
}

// Arrow Function
const sayPeople = (saidWorld) => {
  saidWorld = document.getElementById("arrow-input").value;


  document.getElementById("output-arrow").innerHTML = saidWorld;

  return saidWorld;
}

