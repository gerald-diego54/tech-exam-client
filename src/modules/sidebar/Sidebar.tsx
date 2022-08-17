/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from '../../assets/pictures/logo.svg';
import { logOutService } from '../../services/security/authentication/AuthService';

class Sidebar extends React.Component {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props)
    }

    public logout(): void {
        logOutService().then((response: any) => {
            console.log(response);
        }).catch((error: any) => {
            localStorage.clear();
            window.location.href = '/security/auth';
        });
    }

    public render(): React.ReactNode {
        return(
            <div>
                <div className="shadow bg-body px-2" style={{width: '20vw', height: '100vh'}}>
                <div aria-label='logo'>
                        <img src={Logo} alt="logo" className='py-5 d-block mx-auto' style={{width: '16vw'}} />
                    </div>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item my-1">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button onClick={() => window.location.href = '/main/dashboard'} className="accordion-button fw-bold btn-custom collapsed" style={{backgroundColor: 'rgba(221, 159, 82, 0.2)', color: '#DD9F52'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Dashboard
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                {/* <div className="accordion-body">
                                    <a href="#" className="text-decoration-none fw-bold" style={{color: '#DD9F52'}}>Register Users</a>
                                </div> */}
                            </div>
                        </div>
                        <div className="accordion-item  my-1">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed fw-bold btn-custom" style={{backgroundColor: 'rgba(221, 159, 82, 0.2)', color: '#DD9F52'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Purchases
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <a href="/main/new-customer" className="text-decoration-none fw-bold" style={{color: '#DD9F52'}}>Customer Register</a>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item  my-1">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed fw-bold btn-custom" style={{backgroundColor: 'rgba(221, 159, 82, 0.2)', color: '#DD9F52'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    { localStorage.getItem('name') }
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <a type="button" onClick={this.logout} className="text-decoration-none fw-bold" style={{color: '#DD9F52'}} >Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;