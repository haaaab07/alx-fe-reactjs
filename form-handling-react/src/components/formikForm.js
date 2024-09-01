import React from 'react';
import { useFormik } from 'formik';
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
                {formik.touched.username && formik.errors.username ? (
                    <div>{formik.errors.username}</div>
                ) : null}
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email" 
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password" 
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                ) : null}
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default FormikForm;

