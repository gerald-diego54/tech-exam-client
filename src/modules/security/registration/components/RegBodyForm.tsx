import React from 'react';
import Logo from '../../../../assets/pictures/logo.svg';
import { authRegisterService } from "../../../../services/security/registration/AuthRegisterService";
import { Toast } from 'primereact/toast';

class RegBodyForm extends React.Component <any, any> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
      super(props);
      this.state = {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
      };
      this.handleChange = this.handleChange.bind(this);
      this.submit = this.submit.bind(this);
  }
  public toast: any;

  public handleChange(event: any): any {
    this.setState({ [event.target.name]: event.target.value });
  }

  public submit(): void {
    let registerData:   any = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirm: this.state.password_confirm
    }

    console.log(registerData);
    authRegisterService(registerData).then((response: any) => {
      if(response.status === 200) {
        this.toast.show({severity:'success', summary: 'Success Message', detail: response.data.message, life: 3000});
        window.location.href = '/security/auth'
      }
    }).catch((error: any) => {
      this.toast.show({severity:'error', summary: 'Error Message', detail: error.response.data.errors, life: 3000});
    });
  }

  public render(): React.ReactNode {
      return(
        <div>
            <Toast ref={(el) => this.toast = el} />
            <div aria-label='body' className='security-body'><br /><br /><br />
                <div className='container w-25 bg-white shadow rounded px-4 pb-5'>
                    <img src={Logo} alt="logo" className='d-block mx-auto pt-4 pb-4' style={{width: '18vw'}} />
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control border-warning" name='name' id="floatingInput" placeholder="name@example.com" onChange={this.handleChange} style={{color: '#DD9F52'}} />
                        <label htmlFor="floatingInput"  className='fw-bold' style={{color: '#DD9F52'}}>Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control border-warning" name='email' id="floatingInput" placeholder="name@example.com" onChange={this.handleChange} style={{color: '#DD9F52'}} />
                        <label htmlFor="floatingInput" className='fw-bold' style={{color: '#DD9F52'}}>Email Address</label>
                    </div>
                    <div className="form-floating pb-3">
                        <input type="password" className="form-control border-warning" name='password' id="floatingPassword" placeholder="Password" onChange={this.handleChange} style={{color: '#DD9F52'}} />
                        <label htmlFor="floatingPassword" className='fw-bold' style={{color: '#DD9F52'}}>Password</label>
                    </div>
                    <div className="form-floating pb-3">
                        <input type="password" className="form-control border-warning" id="floatingConfirmPassword" name='password_confirm' placeholder="Confirm Password" onChange={this.handleChange} style={{color: '#DD9F52'}} />
                        <label htmlFor="floatingPassword" className='fw-bold' style={{color: '#DD9F52'}}>Confirm Password</label>
                    </div>
                    <button type="button" onClick={this.submit} className="btn btn-warning btn-custom fw-bold d-block mx-auto" style={{borderColor: '#DD9F52', color: '#FFFFFF', backgroundColor: '#DD9F52', width: '100%', padding: '15px 0 15px 0'}}>Sign-Up</button>
                </div>
            </div>
        </div>
      );
  }
}

export default RegBodyForm