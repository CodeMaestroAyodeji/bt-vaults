import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupValidation from './SignupValidation';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha'; // Ensure you have this installed: npm install react-google-recaptcha
import './Signup.css';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        tos: false,
        privacyPolicy: false,
    });

    const [errors, setErrors] = useState({});
    const [captchaValue, setCaptchaValue] = useState(null);
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, type, checked, value } = event.target;
        setValues((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = SignupValidation(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0 && captchaValue) {
            axios.post('http://localhost:8081/signup', values)
                .then((res) => {
                    navigate('/');
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    };

    const onCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    return (
        <div className="signup_container">
            <div className="signup_form_container">
                <h2 className="signup_form_title">New account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="signup_form_group">
                        <label><strong>Name</strong></label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            onChange={handleInput}
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    <div className="signup_form_group">
                        <label><strong>Email</strong></label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={handleInput}
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="signup_form_group">
                        <label><strong>Password</strong></label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={handleInput}
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            required
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    <div className="form_check">
                        <input
                            type="checkbox"
                            name="tos"
                            className="form_check_input"
                            id="tos"
                            onChange={handleInput}
                            required
                        />
                        <label className="form_check_label" htmlFor="tos">
                            I agree to the <a href="/tos">Terms</a>
                        </label>
                    </div>
                    <div className="form_check">
                        <input
                            type="checkbox"
                            name="privacyPolicy"
                            className="form_check_input"
                            id="privacy-policy"
                            onChange={handleInput}
                            required
                        />
                        <label className="form_check_label" htmlFor="privacy-policy">
                            I agree to the <a href="/privacy-policy">Privacy Policy</a>
                        </label>
                    </div>

                    <div className="signup_form_group">
                        <ReCAPTCHA
                            sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your actual site key
                            onChange={onCaptchaChange}
                        />
                    </div>

                    <button type="submit" className="submit_button">
                        <strong>Create Account</strong>
                    </button>

                    {/* <p className="agree_terms">You agree to our terms and policies</p>
                    <Link to="/" className="signup_link_button">
                        Log In
                    </Link> */}
                </form>
            </div>
        </div>
    );
}

export default Signup;
