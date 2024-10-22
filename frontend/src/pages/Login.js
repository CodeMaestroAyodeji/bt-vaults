import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginValidation from './LoginValidation';
import axios from 'axios';
import './Login.css';
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };

    const handleCaptcha = (value) => {
        setCaptchaVerified(!!value); // Verifies that the captcha is completed
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = LoginValidation(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0 && captchaVerified) {
            setLoading(true); // Start loading
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    navigate('/bt-vaults/my-dashboard');
                })
                .catch(err => {
                    console.error(err);
                    setErrors(prev => ({ ...prev, server: "Login failed. Please check your credentials." }));
                })
                .finally(() => {
                    setLoading(false);// Stop loading
                });
        } else if (!captchaVerified) {
            setErrors(prev => ({ ...prev, captcha: "Please verify the captcha" }));
        }
    };

    return (
        <div className="page_info">
            <div className="form_box">
                <h2 className="form_title">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input_section">
                        <label><strong>Email</strong></label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={handleInput}
                            className={`input_field ${errors.email ? 'input_invalid' : ''}`}
                        />
                        {errors.email && <div className="error_message">{errors.email}</div>}
                    </div>
                    
                    <div className="input_section">
                        <label><strong>Password</strong></label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={handleInput}
                            className={`input_field ${errors.password ? 'input_invalid' : ''}`}
                        />
                        {errors.password && <div className="error_message">{errors.password}</div>}
                    </div>

                    <div className="captcha_section">
                        <ReCAPTCHA
                            sitekey="6LdVDWkqAAAAAIJ25CNhdd0fnSy9GU8t80j-xcBs"
                            onChange={handleCaptcha}
                        />
                        {errors.captcha && <div className="error_message">{errors.captcha}</div>}
                    </div>

                    <button type="submit" className="submit_btn" disabled={loading}>
                        <strong>{loading ? 'Logging in...' : 'Log in'}</strong>
                    </button>
                    {errors.server && <div className="error_message">{errors.server}</div>}

                    {/* Forgot Password Section */}
                    <div className="forgot_password">
                        <p>Forgot your password? <Link to="/reset-password">Click here to reset it here.</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
