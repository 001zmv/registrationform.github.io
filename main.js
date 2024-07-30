document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('remember-me');
 
    // Ma'lumotlarni localStorage'dan yuklash
    if (localStorage.getItem('rememberMe') === 'true') {
       emailInput.value = localStorage.getItem('email');
       passwordInput.value = localStorage.getItem('password');
       rememberMeCheckbox.checked = true;
    }
 
    document.getElementById('login-form').addEventListener('submit', function(event) {
       event.preventDefault(); // Formni yuborishni to'xtatadi
       
       // Kiritilgan ma'lumotlarni olish
       const email = emailInput.value;
       const password = passwordInput.value;
       const rememberMe = rememberMeCheckbox.checked;
 
       // Ma'lumotlarni konsolga chiqarish
       console.log('Email:', email);
       console.log('Password:', password);
       console.log('Remember Me:', rememberMe);
 
       // Forma maydonlarini tozalash
       document.getElementById('login-form').reset();
    if(rememberMe) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('rememberMe', true);
    } else{
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('rememberMe');
        }
    });
});