/* eslint-disable jsx-a11y/anchor-is-valid */
import Sidebar from "../sidebar/Sidebar";
import NewCustomBodyForm from './components/NewCustomBodyForm';

function NewCustomer() {
    return(
        <div>
            <div className="d-flex flex-row">
                <div aria-label="sidebar" style={{width: '27vw'}}>
                    <div className="position-fixed">
                        <Sidebar/>
                    </div>
                </div>
                <div aria-label="content-component" className="container-fluid">
                    <div className="container mt-5">
                        <p className="fs-3 fw-bold" style={{color: '#9F5800'}}>Customer</p>
                        <nav aria-label="breadcrumb" className="rounded pl-3"  style={{border: '1px solid #DD9F52', paddingTop: '3px'}}>
                            <ol className="breadcrumb pt-2">
                              <li className="breadcrumb-item"><a href="#" className="text-decoration-underline" style={{color: '#DD9F52'}}>Dashboard</a></li>
                              <li className="breadcrumb-item active fw-bold" aria-current="page" style={{color: '#DD9F52'}}>New Customer</li>
                            </ol>
                        </nav>

                        <div aria-label="new-customer-body-form">
                            <NewCustomBodyForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewCustomer;