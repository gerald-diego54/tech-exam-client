/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/scope */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

import DialogEditNewCustomer from './DialogEditNewCustomer';
import { displayDialog, displayDialogFalse } from '../model/NewCustomerModel';
import { NewCustomerService } from '../../../services/new-customer/NewCustomerServices';
import '../styles.css';


function NewCustomBodyForm() {

  const [visible, setVisible]: any = useState(false);
  const [tableData, setTableData]: any = useState([]);
  const [response, setResponse]: any = useState(0.00);
  const [rowDeleteId, setDeleteById]: any = useState(0);
  const [formBody, setFormBody]: any = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: ''
  });

  const displayValue = useSelector((state: any) => state.displayDialog.value.payload);
  const toast: any = useRef(null);
  const dispatch = useDispatch();
  const newCustomerService = NewCustomerService;

  
  useEffect((): void => {
    getNewCustomerData();
  }, [response, displayValue]);


  function getNewCustomerData(): any {
    newCustomerService.getNewCustomerServices().then((response: any) => {
        let data = response.data.data;
        setTableData(data)
      }).catch((error: any) => {
        console.log(error);
      });  
  }


  function handleChange(e: any): any {
    setFormBody({...formBody, [e.target.name]: e.target.value});
  }


  function submit(): void {
    let body = {
        users_id: localStorage.getItem('users_id'),
        firstname: formBody.firstname,
        lastname: formBody.lastname,
        email: formBody.email,
        address: formBody.address,
    }
    newCustomerService.newCustomerService(body).then((response: any) => {
        if(response.status === 200 || 201) {
        setResponse(Math.random());
        } 
    }).catch((error: any) => {
        console.log(error)
    });
  }


  function renderData(rowData: any): any {
    return(
        <div className='d-flex flex-row'>
            <Button label="Edit" className="p-button-warning mx-3" onClick={() => {clickEdit(rowData.id)}} /> 
            <Button label="Delete" className="p-button-danger" onClick={() => {clickDelete(); setDeleteById(rowData.id); }} />
        </div>
    );
  }


  function clickEdit(id: number): any {
    dispatch(displayDialogFalse(true));
    dispatch(displayDialog(id));
  }


  function clickDelete(): any {
    setVisible(true);
  };


  function accept(): any {
      let row = rowDeleteId;
      newCustomerService.destroyCustomerServiceById(row).then((response: any) => {
          toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
          setResponse(Math.random());
      }).catch((error: any) => {
          setResponse(Math.random());
      });
  }


  function reject(): any {
       toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  }



  return(
    <div>
         <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
        <Toast ref={toast} />
        <div aria-label='new-form-body' className='container mt-5 rounded shadow-sm px-5 py-5' style={{border: '1px solid #DD9F52'}}>
            <div className="row">
                <div className="col">
                    <div className="form-floating">
                        <input type="email" className="form-control border-warning" name='firstname' id="floatingInput" placeholder="name@example.com" onChange={handleChange} style={{color: '#DD9F52'}} />
                        <label htmlFor="floatingInput"  className='fw-bold' style={{color: '#DD9F52'}}>Firstname</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                        <input type="email" className="form-control border-warning" name='lastname' id="floatingInput" placeholder="name@example.com" onChange={handleChange} style={{color: '#DD9F52'}} />
                        <label htmlFor="floatingInput"  className='fw-bold' style={{color: '#DD9F52'}}>Lastname</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-floating">
                        <input type="email" className="form-control border-warning" name='email' id="floatingInput" placeholder="name@example.com" onChange={handleChange} style={{color: '#DD9F52'}} />
                        <label htmlFor="floatingInput"  className='fw-bold' style={{color: '#DD9F52'}}>Email</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-floating">
                        <input type="email" className="form-control border-warning" name='address' id="floatingInput" placeholder="name@example.com" onChange={handleChange} style={{color: '#DD9F52'}} />
                        <label htmlFor="floatingInput"  className='fw-bold' style={{color: '#DD9F52'}}>Address</label>
                    </div>
                </div>
            </div>
            <div aria-label='buttons' className='d-flex flex-row-reverse'>
                <button type="button" onClick={submit} className="btn btn-warning fw-bold" style={{borderColor: '#DD9F52', color: '#FFFFFF', backgroundColor: '#DD9F52', width: '10%', padding: '10px 0 10px 0'}}>Submit</button>
            </div>
        </div>

        <div aria-label='table' className='mt-5 mb-5'>
            <div className="card">
                <DataTable value={tableData} style={{border: '1px solid #DD9F52'}} className="rounded" scrollable scrollHeight="400px" responsiveLayout="scroll">
                    <Column style={{color: '#DD9F52'}} field="id" header="ID" hidden={false}></Column>
                    <Column style={{color: '#DD9F52'}} field="firstname" header="Firstname"></Column>
                    <Column style={{color: '#DD9F52'}} field="lastname" header="Lastname"></Column>
                    <Column style={{color: '#DD9F52'}} field="email" header="Email"></Column>
                    <Column style={{color: '#DD9F52'}} field="address" header="Address"></Column>
                    <Column style={{color: '#DD9F52'}} body={renderData} header="Actions"></Column>
                </DataTable>
            </div>
        </div>

        <div>
            <DialogEditNewCustomer/>
        </div>
    </div>
  );

}

export default NewCustomBodyForm

