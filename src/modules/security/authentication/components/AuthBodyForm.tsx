import React from "react";
import Logo from '../../../../assets/pictures/logo.svg';
import { authService } from "../../../../services/security/authentication/AuthService";
import { Toast } from 'primereact/toast';

class AuthBodyForm extends React.Component<any, any> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: '',
          };
          this.handleChange = this.handleChange.bind(this);
          this.submit = this.submit.bind(this);
    }

    public toast: any;

    public handleChange(event: any): any {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    public submit(): void {
      let authData:   any = {
          email: this.state.email,
          password: this.state.password,
      }
      authService(authData).then((response: any) => {
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', response.data.data.email);
            localStorage.setItem('users_id', response.data.data.id);
            localStorage.setItem('name', response.data.data.name);
            this.toast.show({severity:'success', summary: 'Success Message', detail: 'Authenticated', life: 3000});
            window.location.href = '/main/dashboard';
        }
      }).catch((error: any) => {
        this.toast.show({severity:'error', summary: 'Error Message', detail: error.response.data.message, life: 3000});
      });
    }

    public render(): React.ReactNode {
        return(
            <div>
                <Toast ref={(el) => this.toast = el} />
                <div aria-label='body' className='security-body'><br /><br /><br />
                    <div className='container w-25 bg-white shadow rounded px-4' style={{paddingBottom: '100px', paddingTop: '50px'}}>
                        <img src={Logo} alt="logo" className='d-block mx-auto pt-4 pb-4' style={{width: '18vw'}} />
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control border-warning" name='email' id="floatingInput" placeholder="name@example.com" onChange={this.handleChange} style={{color: '#DD9F52'}} />
                            <label htmlFor="floatingInput" className='fw-bold' style={{color: '#DD9F52'}}>Email Address</label>
                        </div>
                        <div className="form-floating pb-3">
                            <input type="password" className="form-control border-warning" name='password' id="floatingPassword" placeholder="Password" onChange={this.handleChange} style={{color: '#DD9F52'}} />
                            <label htmlFor="floatingPassword" className='fw-bold' style={{color: '#DD9F52'}}>Password</label>
                        </div>
                        <button type="button" onClick={this.submit} className="btn btn-warning btn-custom fw-bold d-block mx-auto" style={{borderColor: '#DD9F52', color: '#FFFFFF', backgroundColor: '#DD9F52', width: '100%', padding: '15px 0 15px 0'}}>Sign-In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthBodyForm;