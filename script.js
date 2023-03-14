const loginBtn = document.getElementById('login');
const cadastroBtn = document.getElementById('cadastro');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');

loginBtn.addEventListener('click', function() {
    event.preventDefault();
    form1.style.visibility = 'visible';
    form2.style.visibility = 'hidden';
});

cadastroBtn.addEventListener('click', function() {
    event.preventDefault();

    form1.style.visibility = 'hidden';
    form2.style.visibility = 'visible';
});