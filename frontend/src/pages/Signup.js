import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupValidation from './SignupValidation';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',
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
        const validationErrors = SignupValidation(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#212121' }}>
            <div className="bg-white p-3 rounded w-25">
                <form onSubmit={handleSubmit}>
                    <h2>Sign-Up</h2>
                    <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            onChange={handleInput}
                            className="form-control rounded-0"
                        />
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>
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
                        <strong>Sign up</strong>
                    </button>
                    <p>You agree to our terms and policies</p>
                    <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Log in
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
