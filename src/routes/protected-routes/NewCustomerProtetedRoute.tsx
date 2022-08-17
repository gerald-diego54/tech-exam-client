import { Navigate } from 'react-router-dom';
import NewCustomer from '../../modules/new-customer/NewCustomer';

function Auth() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const auth: any = localStorage.getItem('token');
    return auth !== null;
}

function NewCustomerProtectedRoute() {
    const authValue = Auth();
    return authValue ? <NewCustomer/> : <Navigate to={'/security/auth'} />
}

export default NewCustomerProtectedRoute;