const loginForm = document.getElementById ('form1');
const cadastroForm = document.getElementById ('form2');

const login = document.getElementById("loginBtn");
const cadastro = document.getElementById('cadastroBtn');


login.addEventListener("click", function(){
    loginForm.style.visibility = "visible";
    cadastroForm.style.visibility = "hidden";
});

cadastro.addEventListener('click', ()=>{
    cadastroForm.style.visibility = "visible";
    loginForm.style.visibility = "hidden";
});