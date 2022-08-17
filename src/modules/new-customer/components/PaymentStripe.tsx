/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { displayDialogPayment } from '../model/NewCustomerModel';
import { NewCustomerService } from '../../../services/new-customer/NewCustomerServices';


function PaymentStripe(): any {
  const [displayBasic, setDisplayBasic]: any = useState(false);
  const [bodyData, setBodyData]: any = useState({
    amount: 0.00,
    product_name: ''
  });
  const payment_data_test: any = useSelector((state: any) => state.displayDialog.payment_value_render.payload); //new
  const dispatch = useDispatch();
  const dialogFuncMap: any = {
    'displayBasic': setDisplayBasic,
  };
  const newCustomerService = NewCustomerService;
  const [link, setLink]: any = useState('');


  useEffect((): void => {
    RenderDialog();
  }, [payment_data_test]);


  function RenderFooter(name: any): any {
    return (
        <div>
            <Button label="Cancel" icon="pi pi-times" onClick={() => OnHide(name)} className="p-button-danger" />
            <Button label="Save" icon="pi pi-check" onClick={() => OnHide(name)} autoFocus className="p-button-warning" />
        </div>
    );
  }

  function OnHide(name: any): any {
    dialogFuncMap[`${name}`](payment_data_test);
      dispatch(displayDialogPayment(false));
      setDisplayBasic(false)
  }

  function RenderDialog(): any {
    dialogFuncMap['displayBasic'](payment_data_test);
  }


  function HandleChange(event: any): any {
    setBodyData({ ...bodyData, [event.target.name]: event.target.value });
  }


  function Submit(): any {
    let body: any = {
      amount: bodyData.amount * 100,
      product_name: bodyData.product_name
    }

    newCustomerService.postPayment(body).then((response: any) => {
      setLink(response.data.link);
      if (response.status) {
        window.open(response.data.link);
      }
    }).catch((error: any) => {
      console.log(error);
    }); 
  }


  return (
    <div>
        <Dialog header="Stripe Payment" draggable={false} closable={false} visible={displayBasic} style={{ width: '50vw' }} footer={RenderFooter('displayBasic')} onHide={() => OnHide('displayBasic')}>
          <div className='d-flex flex-row mt-3'>
            <div className="field">
              <input className='form-control' style={{padding: '12px 0 12px 12px'}} type='number' name='amount' onChange={HandleChange} placeholder="Product" />
            </div>
            <div className='mx-3'>
              <input className='form-control' style={{padding: '12px 0 12px 12px'}} type='text' name='product_name' onChange={HandleChange} placeholder="Product" />
            </div>
            <div className='mx-3'>
              <Button label="Checkout" icon="pi pi-check" onClick={Submit} type='button' className="p-button-info" />
            </div>
          </div>
        </Dialog>
    </div>
  )
}

export default PaymentStripe