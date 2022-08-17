import '../../../assets/styles/style.css';
import Logo from '../../../assets/pictures/logo.svg';

function MainSection() {
  return (
    <div>
        <div aria-label='main-section' className="main-background">
            <div aria-label='logo'>
              <img src={Logo} alt="logo" className='mx-auto d-block' style={{paddingTop: '150px'}} />
              <p className='text-center mx-auto d-block text-white pt-5 lh-lg' style={{width: '600px'}}>
              <strong>WHAT IS RETAIL CHROME ?</strong><br />
              Finace Chrome is an web application that provides finance management for personal used. 
              The application is design to become a user friendly and responsive to monitor your daily 
              finance status. It is one of the Chrome Series that is pre-developed.
              </p>
              <div aria-label='buttons' className='position-relative' style={{top: '130px'}}>
                <div className='animation-1'></div>
                <div className='animation-2'></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MainSection