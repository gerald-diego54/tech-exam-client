import Logo from '../../../assets/pictures/logo.svg';
import '../../../assets/styles/style.css';

function MainNavbar() {
  return (
    <div>
        <div aria-label='navbar' className='container-fluid shadow p-3 bg-body rounded' style={{height: '11vh'}}>
            <div className='row'>
                <div className="col">
                    <div aria-label='logo'>
                        <img src={Logo} alt="logo" className='mt-2' style={{width: '16vw'}} />
                    </div>
                </div>

                <div className="col">
                <div aria-label='buttons' className='d-flex flex-row-reverse mt-2'>
                    <button type="button" className="btn btn-outline-warning btn-custom fw-bold mx-4" onClick={() => window.location.href = "/security/register"} style={{borderColor: '#DD9F52', color: '#DD9F52'}}>Sign-Up</button>
                    <button type="button" className="btn btn-warning fw-bold text-white" onClick={() => window.location.href = "/security/auth"} style={{backgroundColor: '#DD9F52', borderColor: '#DD9F52'}}>Sign-In</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainNavbar