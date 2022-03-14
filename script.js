const passwordCheck = () => {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    password.value === confirmPassword.value ? confirmPassword.setCustomValidity('') : confirmPassword.setCustomValidity('Passwords do not match'); 
}

