import FinanceLogo from '../../../assets/pictures/finance-logo.svg';
import RetailLogo from '../../../assets/pictures/retail-logo.svg';
import SolidityLogo from '../../../assets/pictures/solidity-logo.svg';

function MainFooter() {
  return (
    <div>
        <div aria-label='products' style={{height: '40vh'}}>
            <p className='text-center fs-4 fw-bold mt-5'>Original Cloud Service of Chrome Series</p>
            <div className='container border-dark' style={{borderTop: '2px solid black'}}>
                <div className="row">
                    <div className="col">
                        <img src={FinanceLogo} alt="finance-logo" className='d-block mx-auto mt-4' />
                        <p className='text-center d-block mx-auto mt-4' style={{width: '316px'}}>Finance Chrome is a software that gives a financial management realtime and to track the daily expenses</p>
                        <button type="button" className="btn btn-primary fw-bold text-white d-block mx-auto" style={{backgroundColor: '#0068A3'}}>SIGN IN NOW</button>
                    </div>
                    <div className="col">
                        <img src={RetailLogo} alt="finance-logo" className='d-block mx-auto mt-4' />
                        <p className='text-center d-block mx-auto mt-4' style={{width: '316px'}}>Finance Chrome is a software that gives a financial management realtime and to track the daily expenses</p>
                        <button type="button" className="btn btn-warning fw-bold text-white d-block mx-auto" style={{backgroundColor: '#DD9F52'}}>SIGN IN NOW</button>
                    </div>
                    <div className="col">
                        <img src={SolidityLogo} alt="finance-logo" className='d-block mx-auto mt-4' />
                        <p className='text-center d-block mx-auto mt-4  ' style={{width: '316px'}}>Finance Chrome is a software that gives a financial management realtime and to track the daily expenses</p>
                        <button type="button" className="btn btn-dark fw-bold text-white d-block mx-auto" style={{backgroundColor: '#404040'}}>SIGN IN NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainFooter