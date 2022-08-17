/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../styles.css';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

import { displayDialog, displayDialogFalse, displayDialogPayment } from '../model/NewCustomerModel';
import { NewCustomerService } from '../../../services/new-customer/NewCustomerServices';
import PaymentStripe from './PaymentStripe';


function DialogEditNewCustomer() {
    const [displayBasic, setDisplayBasic]: any = useState(false);
    const [response, setResponse]: any = useState(0.00);
    const [formBody, setFormBody]: any = useState({
        firstname: '',
        lastname: '',
        email: '',
        address: ''
      });
    const [paymentRender, setPaymentRender]: any = useState(false);

    const newCustomerService = NewCustomerService;
    const dispatch: any = useDispatch();
    const id: number = useSelector((state: any) => state.displayDialog.id.payload);
    const payment_data_test: any = useSelector((state: any) => state.displayDialog.payment_value_render.payload); //new
    const payment_data_test_prev: any = useSelector((state: any) => state.displayDialog.payment_value_render); //old
    const displayValue: boolean = useSelector((state: any) => state.displayDialog.value.payload);
    const toast: any = useRef(null);
    const dialogFuncMap: any = {
        displayBasic: setDisplayBasic,
    }


    useEffect((): void => {
        ShowDialog();
    }, [id, displayBasic, paymentRender]);


    function ShowDialog(): any {
        if (displayValue) {
            let name: string = 'displayBasic';
            dialogFuncMap[name](true);
            GetNewCustomerDataById();
        } else if(payment_data_test_prev === false) {
            setPaymentRender(payment_data_test_prev);
        } 
        else {
            GetNewCustomerDataById();
        }
    }


    function GetNewCustomerDataById(): any {
        newCustomerService.getNewCustomerServices().then((response: any) => {
            let data = response.data.data;
            for(let i=0; i<data.length; i++) {
                if(data[i].id === id) {
                    setFormBody({
                        firstname: data[i].firstname,
                        lastname: data[i].lastname,
                        email: data[i].email,
                        address: data[i].address
                    })
                    break;
                }
            }
        }).catch((error: any) => {
            console.log(error);
        });          
    }


    function HandleChange(e: any): any {
        setFormBody({...formBody, [e.target.name]: e.target.value});
    } 


    function RenderFooter(name: string): any {
        return (
            <div>
                <Button label="Payment" icon="pi pi-money-bill" onClick={() => { Payment(); }} className="p-button-primary" />
                <Button label="Cancel" icon="pi pi-times" onClick={() => { ConfirmCancel(name); }} className="p-button-danger" />
                <Button label="Save" icon="pi pi-check" style={{backgroundColor: '#DD9F52'}} className="btn-yes" onClick={() => { Submit(); }} autoFocus={true} />
            </div>
        );
    }


    function Submit(): void {
        let body = {
            users_id: localStorage.getItem('users_id'),
            firstname: formBody.firstname,
            lastname: formBody.lastname,
            email: formBody.email,
            address: formBody.address,
        }
        const name: string = 'displayBasic';
        dispatch(displayDialogFalse(false));

        newCustomerService.updateCustomerServiceById(id, body).then((response) => {
            dialogFuncMap[name](false);
            toast.current.show({severity:'success', summary: 'Success Message', detail:'Save sucessfully', life: 3000});
        }).catch((error: any) => {
            console.log(error)
        });
    }

    
    function ConfirmCancel (name: string): any {
        confirmDialog({
            message: 'Do you want to cancel this record?',
            header: 'Cancel Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    }


    function accept(): any {
        let name: string = 'displayBasic'
        dispatch(displayDialogFalse(false));
        dialogFuncMap[name](false);
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }


    function reject() {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }


    function Payment(): void {
        dispatch(displayDialogPayment(true));
        setPaymentRender(true)
    }
    

  return (
    <div>
        <Toast ref={toast} />
        <ConfirmDialog />
        <PaymentStripe />
        <Dialog closable={false} visible={displayBasic} style={{ width: '50vw' }} footer={RenderFooter('displayBasic')} onHide={() => ConfirmCancel('displayBasic')}>
        <div className="row">
                <div className="col">
                    <div className="form-floating">
                        <input type="email" className="form-control border-warning" name='firstname' id="floatingInput" placeholder="name@example.com" value={formBody.firstname} onChange={HandleChange} style={{color: '#DD9F52'}} />
                        <label htmlFor="floatingInput"  className='fw-bold' style={{color: '#DD9F52'}}>Firstname</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                        <input type="email" className="form-control border-warning" name='lastname' id="floatingInput" placeholder="name@example.com" value={formBody.lastname} onChange={HandleChange} style={{color: '#DD9F52'}} />
                        <label htmlFor="floatingInput"  className='fw-bold' style={{color: '#DD9F52'}}>Lastname</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-floating">
                        <input type="email" className="form-control border-warning" name='email' id="floatingInput" placeholder="name@example.com" value={formBody.email} onChange={HandleChange} style={{color: '#DD9F52'}} />
                        <label htmlFor="floatingInput"  className='fw-bold' style={{color: '#DD9F52'}}>Email</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-floating">
                        <input type="email" className="form-control border-warning" name='address' id="floatingInput" placeholder="name@example.com" value={formBody.address} onChange={HandleChange} style={{color: '#DD9F52'}} />
                        <label htmlFor="floatingInput"  className='fw-bold' style={{color: '#DD9F52'}}>Address</label>
                    </div>
                </div>
            </div>
        </Dialog>
    </div>
  )
}

export default DialogEditNewCustomer