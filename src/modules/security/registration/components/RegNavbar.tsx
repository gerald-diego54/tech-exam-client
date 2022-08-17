import Logo from '../../../../assets/pictures/logo.svg'
import '../../../../assets/styles/style.css';

function RegNavbar() {
  return (
    <div>
        <div aria-label='navbar' className='container-fluid shadow p-3 bg-body rounded' style={{height: '11vh'}}>
          <div aria-label='logo'>
            <img src={Logo} alt="logo" className='mt-2' style={{width: '16vw'}} />
          </div>
        </div>
    </div>
  )
}

export default RegNavbar