import React from 'react';
import { useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormikForm() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
        }),
        onSubmit: values => {
            console.log('Form submitted', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    {...formik.getFieldProps('username')}
                />
                <ErrorMessage name="username">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    {...formik.getFieldProps('email')}
                />
                <ErrorMessage name="email">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    {...formik.getFieldProps('password')}
                />
                <ErrorMessage name="password">
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default FormikForm;
