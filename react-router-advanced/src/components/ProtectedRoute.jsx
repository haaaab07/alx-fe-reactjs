// src/components/ProtectedRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element, ...rest }) {
    const isAuthenticated = false; // Replace with real authentication logic

    return (
        <Route
            {...rest}
            element={isAuthenticated ? element : <Navigate to="/login" />}
        />
    );
}

export default ProtectedRoute;
