import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string()
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
});

function FormikForm() {
    const initialValues = {
        username: '',
        email: '',
        password: ''
    };

    const handleSubmit = (values) => {
        console.log('Form submitted', values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <Field 
                        type="text" 
                        id="username" 
                        name="username"
                    />
                    <ErrorMessage name="username">
                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <Field 
                        type="email" 
                        id="email" 
                        name="email"
                    />
                    <ErrorMessage name="email">
                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <Field 
                        type="password" 
                        id="password" 
                        name="password"
                    />
                    <ErrorMessage name="password">
                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                    </ErrorMessage>
                </div>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
}

export default FormikForm;
