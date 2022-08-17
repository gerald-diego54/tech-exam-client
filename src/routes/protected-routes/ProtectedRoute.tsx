import React from 'react'
import { Navigate } from 'react-router-dom';
import Dashboard from '../../modules/dashboard/Dashboard';

function Auth() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const auth: any = localStorage.getItem('token');
    return auth !== null;
}

function DashboardProtectedRoute() {
    const authValue = Auth();
    return authValue ? <Dashboard/> : <Navigate to={'/security/auth'} />
}

export default DashboardProtectedRoute;