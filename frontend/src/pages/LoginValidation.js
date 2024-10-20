function LoginValidation(values) {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.email.trim()) {
        errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Email is invalid";
    }

    if (!values.password.trim()) {
        errors.password = "Password should not be empty";
    }

    return errors;
}

export default LoginValidation;
