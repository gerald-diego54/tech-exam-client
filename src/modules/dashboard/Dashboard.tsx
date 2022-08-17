/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from '../sidebar/Sidebar';

class Dashboard extends React.Component {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props);
    }

    public render(): React.ReactNode {
        return(
            <div>
                <div className="d-flex flex-row">
                    <div aria-label="sidebar">
                        <Sidebar/>
                    </div>
                    <div aria-label="content-component" className="container-fluid">
                        <div className="container mt-5">
                            <p className="fs-3 fw-bold" style={{color: '#9F5800'}}>Dashboard</p>
                            <nav aria-label="breadcrumb" className="rounded pl-3"  style={{border: '1px solid #DD9F52', paddingTop: '3px'}}>
                                <ol className="breadcrumb pt-2">
                                  <li className="breadcrumb-item active fw-bold" aria-current="page" style={{color: '#DD9F52'}}>Dashboard</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;