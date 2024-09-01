import React, { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = Object.values(formData).every(field => field.trim() !== '');
        if (isValid) {
            console.log('Form submitted', formData);
        } else {
            console.log('Please fill out all fields');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    type="text" 
                    name="username"
                    value={formData.username} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email"
                    value={formData.email} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password"
                    value={formData.password} 
                    onChange={handleChange} 
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;
