const loginBtn = document.getElementById('loginBtn');
const cadastroBtn = document.getElementById('cadastroBtn');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');

loginBtn.addEventListener('click', function() {
    event.preventDefault();
    form1.style.visibility = 'visible';
    form2.style.visibility = 'hidden';

    loginBtn.style.textDecoration = "underline";
    cadastroBtn.style.textDecoration = "none";
});

cadastroBtn.addEventListener('click', function() {
    event.preventDefault();

    form1.style.visibility = 'hidden';
    form2.style.visibility = 'visible';

    loginBtn.style.textDecoration = "none";
    cadastroBtn.style.textDecoration = "underline";
});


