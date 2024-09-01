// src/pages/Profile.jsx
import React from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="details">Details</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                </ul>
            </nav>
            <hr />
            <Outlet /> {/* This will render nested routes */}
        </div>
    );
}

export default Profile;
