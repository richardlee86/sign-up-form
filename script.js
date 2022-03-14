const passwordCheck = () => {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity('')
    } else {
        confirmPassword.setCustomValidity('Passwords do not match');       
    }      
}

