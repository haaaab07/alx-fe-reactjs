import React, { useState } from 'react';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        let formErrors = {};

        if (!username) {
            formErrors.username = 'Username is required';
        }

        if (!email) {
            formErrors.email = 'Email is required';
        }

        if (!password) {
            formErrors.password = 'Password is required';
        }

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted', { username, email, password });
        } else {
            console.log('Validation errors:', formErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;
