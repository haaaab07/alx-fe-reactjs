import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

function FormikForm() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .required('Required')
        }),
        onSubmit: values => {
            console.log('Form submitted', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    type="text" 
                    {...formik.getFieldProps('username')}
                />
                <ErrorMessage name="username" component="div" />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    {...formik.getFieldProps('email')}
                />
                <ErrorMessage name="email" component="div" />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    {...formik.getFieldProps('password')}
                />
                <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default FormikForm;
