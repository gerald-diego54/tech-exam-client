// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Main from "../modules/main/Main";
import Authentication from '../modules/security/authentication/Authentication';
import AuthRegister from '../modules/security/registration/AuthRegister';
import DashboardProtectedRoute from './protected-routes/ProtectedRoute';
import NewCustomerProtectedRoute from './protected-routes/NewCustomerProtetedRoute';

class Routers extends React.Component {
 // eslint-disable-next-line @typescript-eslint/no-useless-constructor
 constructor(props: any) {
    super(props)
  }

  public componentDidMount(): void {
      
  }

  public render() {
      return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/security/auth" element={<Authentication/>} />
                    <Route path="/security/register" element={<AuthRegister/>} />
                    <Route path="/main/dashboard" element={<DashboardProtectedRoute/>} />
                    <Route path="/main/new-customer" element={<NewCustomerProtectedRoute/>} />
                </Routes>
            </Router>
        </div>
      );
  }
}

export default Routers;