const formulario = document.querySelector('#form');


formulario.addEventListener("click", function(){
let inputs = document.getElementsByTagName("input");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.color = "black";
  }
});