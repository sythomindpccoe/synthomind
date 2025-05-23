document.addEventListener('DOMContentLoaded', function() {
    
});


const loginForm = document.getElementById('loginForm');
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');
const eyeIcon = togglePassword.querySelector('i');

   
togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
        
    if (type === 'password') {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        togglePassword.setAttribute('aria-label', 'Show password');
    } else {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        togglePassword.setAttribute('aria-label', 'Hide password');
    }
});


loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
        
    const email = document.getElementById('email').value;
    const password = passwordInput.value;
        
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // console.log('Login attempt:', { email, password });
    // alert('Login successful (demo)\nEmail: ' + email);
    window.location.href = '/dashboard';
});


