import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginValidation from './LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = LoginValidation(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    navigate('/dashboard');
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#212121' }}>
            <div className="bg-white p-4 rounded" style={{ width: '25%' }}>
                <form onSubmit={handleSubmit}>
                    <h2 style={{ color: '#212121' }}>Sign-In</h2>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={handleInput}
                            className="form-control rounded-0"
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={handleInput}
                            className="form-control rounded-0"
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <button type="submit" className="btn w-100 rounded-0" style={{ backgroundColor: '#FFC107', color: '#FFF' }}>
                        <strong>Log in</strong>
                    </button>
                    <p className="text-center mt-2">You agree to our terms and policies</p>
                    <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Create Account
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
